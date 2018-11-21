package main

import (
	"bytes"
	"errors"
	"flag"
	"fmt"
	"html"
	"html/template"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"sort"
	"strconv"
	"strings"

	"github.com/fsnotify/fsnotify"
	"github.com/russross/blackfriday"
	"github.com/tidwall/tile38/core"
)

type TemplateData struct {
	Contents        template.HTML
	FrontMatter     map[string]string
	Title           string
	PageClass       string
	Super           string
	Commands        map[string]core.Command
	CommandName     string
	SortedCommands  []string
	RelatedCommands []string
	Group           string
	Command         core.Command
	LatestVersion   string
}

func simpleCommandParams(command core.Command) string {
	return command.String()[len(command.Name):]
}
func urlName(name string) string {
	return strings.Replace(strings.ToLower(name), " ", "-", -1)
}

var latestVersion string

func getLatestVersion(repo string) (string, error) {
	resp, err := http.Get("https://github.com/" + repo + "/releases")
	if err != nil {
		return "", err
	}
	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}
	s := string(data)
	idx := strings.Index(s, repo+"/archive/")
	if idx != -1 {
		var version string
		s = strings.Split(s[idx+len(repo+"/archive/"):], `"`)[0]
		if strings.HasSuffix(s, ".zip") {
			version = s[:len(s)-4]
		} else if strings.HasSuffix(s, ".tar.gz") {
			version = s[:len(s)-7]
		}
		if version != "" {
			return version, nil
		}
	}
	return "", errors.New("Could not locate latest release in Github source.")
}

func main() {
	var output string
	var port int
	flag.StringVar(&output, "output", "_output", "Output of static site")
	flag.IntVar(&port, "port", 0, "server port. Zero = do not run server")
	flag.Parse()

	commands := core.Commands
	funcMap := template.FuncMap{
		"simpleCommandParams": simpleCommandParams,
		"lcase":               strings.ToLower,
		"urlname":             urlName,
	}

	var err error
	latestVersion, err = getLatestVersion("tidwall/tile38")
	if err != nil {
		log.Fatal(err)
	}

	if err := Proc(output, commands, funcMap); err != nil {
		log.Fatal(err)
	}
	if port != 0 {
		for _, dir := range []string{"layouts", "root"} {
			if err := Watch(dir, func(fname string) {
				log.Printf("reprocessing: %s", fname)
				if err := Proc(output, commands, funcMap); err != nil {
					log.Printf("error: %s", err.Error())
				}
			}); err != nil {
				log.Fatal(err)
			}
		}
		log.Printf("listening on port %d", port)
		if err := http.ListenAndServe(fmt.Sprintf(":%d", port), http.FileServer(http.Dir(output))); err != nil {
			log.Fatal(err)
		}
	}
}

func Watch(dir string, change func(fname string)) error {
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		return err
	}
	go func() {
		for {
			select {
			case event := <-watcher.Events:
				if event.Op&fsnotify.Chmod != fsnotify.Chmod {
					change(event.Name)
				}
			}
		}
	}()
	if err := watcher.Add(dir); err != nil {
		return err
	}
	fis, err := ioutil.ReadDir(dir)
	if err != nil {
		return err
	}
	for _, fi := range fis {
		if fi.IsDir() {
			if err := Watch(path.Join(dir, fi.Name()), change); err != nil {
				return err
			}
		}
	}
	return nil
}

func Proc(output string, commands map[string]core.Command, funcMap map[string]interface{}) error {
	fis, err := ioutil.ReadDir("layouts")
	if err != nil {
		return err
	}
	var fnames []string
	for _, fi := range fis {
		if fi.IsDir() || path.Ext(fi.Name()) != ".html" {
			continue
		}
		fnames = append(fnames, "layouts/"+fi.Name())
	}
	t, err := template.New("tile38").Funcs(funcMap).ParseFiles(fnames...)
	if err != nil {
		return err
	}
	tmp, err := ioutil.TempDir("", "website")
	if err != nil {
		return err
	}
	defer os.RemoveAll(tmp)
	if err := CopyDir("root/assets/", path.Join(tmp, "assets")); err != nil {
		return err
	}
	if err := Scan(0, tmp, "root/", t, commands, funcMap); err != nil {
		return err
	}
	if err := os.RemoveAll(output); err != nil {
		return err
	}
	if err := os.Rename(tmp, output); err != nil {
		return err
	}
	return nil
}

func Lessc(path string) {
	if !strings.HasSuffix(path, ".less") {
		panic("invalid less file")
	}
	input := path
	output := path[:len(path)-5] + ".css"
	output = strings.Replace(output, "/less/", "/css/", -1)
	combined, err := exec.Command("lessc", input, output).CombinedOutput()
	if err != nil {
		log.Printf("less: %s", combined)
	}

}

func Scan(depth int, output, dir string, t *template.Template, commands map[string]core.Command, funcMap map[string]interface{}) error {
	fis, err := ioutil.ReadDir(dir)
	if err != nil {
		return err
	}

	for _, fi := range fis {
		link := ""
		if fi.Mode()&os.ModeSymlink == os.ModeSymlink {
			var err error
			link, err = os.Readlink(path.Join(dir, fi.Name()))
			if err != nil {
				return err
			}
		}
		if fi.IsDir() || link != "" {
			fpath := path.Join(dir, fi.Name())
			if link != "" {
				fpath = path.Join(dir, link)
			}
			if err := Scan(depth+1, path.Join(output, fi.Name()), fpath, t, commands, funcMap); err != nil {
				return err
			}
		}
		if fi.Name() == "favicon.ico" && depth == 0 {
			if data, err := ioutil.ReadFile(path.Join(dir, fi.Name())); err != nil {
				return err
			} else if err := ioutil.WriteFile(path.Join(output, fi.Name()), data, 0600); err != nil {
				return err
			}
			continue
		}
		if path.Ext(fi.Name()) == ".less" {
			// convert less to css
			Lessc(filepath.Join(dir, fi.Name()))
			continue
		}
		if path.Ext(fi.Name()) != ".html" && path.Ext(fi.Name()) != ".md" {
			continue
		}
		// read contents
		contents, err := ioutil.ReadFile(path.Join(dir, fi.Name()))
		if err != nil {
			return err
		}

		// render raw html
		rawhtml := strings.TrimSpace(string(contents))

		// read front matter
		frontMatter := make(map[string]string)
		if strings.HasPrefix(rawhtml, "<!--") {
			idx := strings.Index(rawhtml, "-->")
			if idx != -1 {
				for _, line := range strings.Split(strings.TrimSpace(rawhtml[4:idx-1]), "\n") {
					idx := strings.Index(line, ":")
					if idx != -1 {
						key := strings.TrimSpace(line[:idx])
						value := strings.TrimSpace(line[idx+1:])
						frontMatter[key] = value
					}
				}
				rawhtml = rawhtml[idx+3:]
			}
		}
		if frontMatter["layout"] == "" {
			frontMatter["layout"] = "index.html"
		}

		var sortedCommands []string
		for name := range commands {
			sortedCommands = append(sortedCommands, name)
		}
		sort.Strings(sortedCommands)

		data := &TemplateData{
			FrontMatter:    frontMatter,
			Title:          frontMatter["title"],
			PageClass:      frontMatter["class"],
			Super:          frontMatter["super"],
			Commands:       commands,
			SortedCommands: sortedCommands,
			CommandName:    strings.ToUpper(frontMatter["command"]),
			LatestVersion:  latestVersion,
		}

		for name, command := range commands {
			if name == data.CommandName {
				data.Group = command.Group
				data.Command = command
				for _, command := range commands {
					if command.Group == data.Group {
						data.RelatedCommands = append(data.RelatedCommands, command.Name)
					}
				}
				break
			}
		}
		sort.Strings(data.RelatedCommands)

		var ob bytes.Buffer
		tt, err := template.New(path.Join(dir, fi.Name())).Funcs(funcMap).Parse(string(contents))
		if err != nil {
			return err
		}
		if err := tt.Execute(&ob, data); err != nil {
			return err
		}

		var markup string
		if path.Ext(fi.Name()) == ".md" {
			markup = string(blackfriday.MarkdownCommon(Tile38Markdown(ob.Bytes())))
		} else {
			markup = string(ob.Bytes())
		}

		html := template.HTML(strings.TrimSpace(markup))
		data.Contents = html

		for _, t := range t.Templates() {
			var buf bytes.Buffer
			if t.Name() == frontMatter["layout"] {
				if err := t.Funcs(funcMap).Execute(&buf, data); err != nil {
					return err
				}
				if err := os.MkdirAll(output, 0700); err != nil {
					return err
				}
				fname := fi.Name()[:strings.LastIndex(fi.Name(), ".")]
				if fname != "index" {
					if err := os.Mkdir(path.Join(output, fname), 0700); err != nil {
						if !os.IsExist(err) {
							return err
						}
					}
					fname += "/index"
				}
				fname += ".html"
				err := ioutil.WriteFile(path.Join(output, fname), buf.Bytes(), 0600)
				if err != nil {
					return err
				}
				break
			}
		}
	}
	return nil
}

func CopyDir(src, dst string) error {
	if err := os.MkdirAll(dst, 0700); err != nil {
		return err
	}
	fis, err := ioutil.ReadDir(src)
	if err != nil {
		return err
	}
	var fin, fout *os.File
	defer func() {
		if fin != nil {
			fin.Close()
		}
		if fout != nil {
			fout.Close()
		}
	}()
	for _, fi := range fis {
		if fi.IsDir() {
			err = CopyDir(path.Join(src, fi.Name()), path.Join(dst, fi.Name()))
		} else {
			if fin, err = os.Open(path.Join(src, fi.Name())); err != nil {
				return err
			}
			if fout, err = os.Create(path.Join(dst, fi.Name())); err != nil {
				return err
			}
			if _, err = io.Copy(fout, fin); err != nil {
				return err
			}
			fin.Close()
			fout.Close()
		}
		if err != nil {
			return err
		}
	}
	return nil
}

func Tile38FormatCode(code string) string {
	out := ""
	for i, line := range strings.Split(code, "\n") {
		oline := line
		line = strings.TrimSpace(line)
		if i == 0 && line == "-json" {
			return "<json>" + html.EscapeString(strings.TrimSpace(code[5:])) + "</json>"
		}
		if i == 0 && line == "-cli" {
			continue
		}
		if i == 0 && strings.HasPrefix(line, "-") {
			return html.EscapeString(strings.TrimSpace(code[len(line):]))
		}
		front := ""
		for _, ch := range []byte(oline) {
			if ch == ' ' || ch == '\t' {
				front += string(ch)
			} else {
				break
			}
		}

		nline := ""
		comment := false
		geojson := false
		for _, word := range strings.Split(line, " ") {
			if comment || geojson {
				nline += html.EscapeString(word) + " "
				continue
			}
			if strings.HasPrefix(word, "#") {
				comment = true
				nline += "<comment>" + html.EscapeString(word) + " "
				continue
			}
			if strings.HasPrefix(word, "{") {
				comment = true
				nline += "<geojson>" + html.EscapeString(word) + " "
				continue
			}

			keyword := true
			for i, c := range []byte(word) {
				if i > 0 && keyword && c >= '0' && c <= '9' {
					continue
				}
				if c < 'A' || c > 'Z' {
					keyword = false
					break
				}
			}
			if keyword {
				nline += "<keyword>" + html.EscapeString(word) + "</keyword> "
				continue
			}
			_, err := strconv.ParseFloat(word, 64)
			if err == nil {
				nline += "<number>" + html.EscapeString(word) + "</number> "
				continue
			}
			nline += html.EscapeString(word) + " "
		}
		out += front
		out += strings.TrimSpace(nline)
		if geojson {
			out += "</geojson>"
		}
		if comment {
			out += "</comment>"
		}
		out += "\n"
	}
	return strings.TrimSpace(out)
}

func Tile38Markdown(data []byte) []byte {
	parts := strings.Split(string(data), "```tile38")
	s := parts[0]
	for i := 1; i < len(parts); i++ {
		idx := strings.Index(parts[i], "```")
		if idx == -1 {
			s += parts[i]
			continue
		}
		code := strings.TrimSpace(parts[i][:idx])
		s += `<code class="block">`
		s += Tile38FormatCode(code)
		s += "</code>"
		s += parts[i][idx+3:]
	}
	return []byte(s)
}
