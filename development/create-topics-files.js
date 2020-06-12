const fs = require("fs");

const topicsPath = "./old_topics/";
const paths = [topicsPath];

for (path of paths) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    // console.log(file.toUpperCase());
    const data = fs.readFileSync(path + file, "utf8");

    // compose header element: id, title, sidebar_label
    const fileId = file.replace(".md", "");
    const title = fileId
      .split("-")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    const sidebar_label = title;
    const header = getHeader(fileId, title, sidebar_label);

    // grab topic body from old markdown file
    const topicBody = getTopicBody(data);

    // write all elements to new command file
    writeFile(fileId, header, topicBody);
  });
}

// HEADER
function getHeader(id, title, sidebarLabel) {
  const header = `id: ${id}\ntitle: ${title}\nsidebar_label: ${sidebarLabel}`;

  return "---\n" + header + "\n---\n\n";
}

// BODY
function getTopicBody(data) {
  const mdHeadEnd = data.match(/-->/);
  const bodyBeginIndex = mdHeadEnd.index + 3;
  let body = data.slice(bodyBeginIndex).trim();

  // replace internal link paths that start "/" with "../"
  if (body.match(/\]\(\//g)) {
    body = body.replace(/\]\(\//g, "](../");
  }

  // insert '.md' file extension on relevent internal links
  // [link text](../commandsORtopics/filenameORfile-name)
  // [link text](../commandsORtopics/filenameORfile-name#
  if (body.match(/\]\(\.\.\/(commands|topics)\/[a-z]+(-[a-z]+)*?(#|\))/g)) {
    const matches = body.match(
      /\]\(\.\.\/(commands|topics)\/[a-z]+(-[a-z]+)*?(#|\))/g
    );
    for (match of matches) {
      let firstChars = match.slice(0, match.length - 1);
      let endChar = match.slice(match.length - 1);
      let replacement = [firstChars, ".md", endChar].join("");
      body = body.replace(match, replacement);
    }
  }

  body = "\n\n" + body + "\n";

  return body;
}

// WRITE FILE
function writeFile(name, header = null, body = null) {
  const content = (header ? header : "") + (body ? body : "");

  fs.writeFile(`../docs/topics/${name}.md`, content, function(err) {
    if (err) throw err;
    ``;
    console.log(`${name} Saved!`);
  });
}
