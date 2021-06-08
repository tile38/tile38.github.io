const fs = require("fs");
var colors = require("colors");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);

// const commonCommands = [
//   "SET",
//   "GET",
//   "DEL",
//   "NEARBY",
//   "INTERSECTS",
//   "WITHIN",
//   "SETHOOK",
//   "SETCHAN",
//   "SUBSCRIBE"
// ];

// write individual COMMAND files
for (command of Object.keys(commands)) {
  const fileId = command.toLowerCase().replace(" ", "-");
  // console.log(fileId.toUpperCase());
  const props = commands[command];
  const group = props.group;

  // compose header element: id, title, sidebar_label
  const title = command;
  // const sidebar_label = commonCommands.includes(command)
  //   ? command
  //   : "__no_label";
  const sidebar_label = "__no_label";
  const header = getHeader(fileId, title, sidebar_label);

  // compose full-syntax element
  const syntax = getSyntax(command, props.arguments);

  // grab command body from old markdown file
  const fileName = fileId + ".md";
  const commandBody = getCommandBody(fileName);

  // compose related commands list with links
  const relatedCommands = getRelatedCommands(command, group, commands);

  // write all elements to new command file
  writeFile(fileId, header, syntax, commandBody, relatedCommands);
}

// write ALL COMMANDS file
const allFileId = "index";
const allTitle = "Commands";
const allSidebarLabel = "Commands";

const allHeader = getHeader(allFileId, allTitle, allSidebarLabel);
let allBody = "";
for (command of Object.keys(commands).sort()) {
  allBody += `**[${command}](${command.toLowerCase().replace(" ", "-") +
    ".html"})** - ${commands[command].summary}\n\n`;
}

writeFile(allFileId, allHeader, null, allBody, null);

/* 
file building functions 
*/

// HEADER
function getHeader(id, title, sidebarLabel) {
  const header = `id: ${id}\ntitle: ${title}\nsidebar_label: ${sidebarLabel}`;

  return "---\n" + header + "\n---\n\n";
}

// SYNTAX
function getSyntax(command, args) {
  function getArgs(a) {
    let s = "";

    if (a.command) {
      s += " " + a.command;
    }

    if (a.enumargs) {
      let eargs = "";
      for (earg of a.enumargs) {
        let v = earg.name ? earg.name + " " : "";
        v += earg.arguments ? getArgs(earg.arguments) : "";

        v = v.trim();
        if (v.includes(" ")) {
          v = "(" + v + ")";
        }
        eargs += v + "|";
      }

      if (eargs.length > 0) {
        eargs = eargs.slice(0, eargs.length - 1);
      }
      s += " " + eargs;
    } else if (a.enum) {
      s += " " + a.enum.join("|");
    } else {
      let names = getNames(a);
      let subs = "";

      for (name of names) {
        subs += " " + name;
      }
      subs = subs.trim();
      s += " " + subs;

      if (a.variadic) {
        if (names.length === 0) {
          s += " [" + subs + " ...]";
        } else {
          s += " [" + names[names.length - 1] + "...]";
        }
      }
      if (a.multiple) {
        s += " ...";
      }
    }
    s = s.trim();
    if (a.optional) {
      s = "[" + s + "]";
    }

    return s;
  }

  function getNames(argsObj) {
    let names = [];

    const name = argsObj.name;

    if (name) {
      names = typeof name === "string" ? [...names, name] : [...names, ...name];
    } else if (!argsObj.command) {
      argsObj.forEach(item => {
        names.push(item.name);
      });
    }

    return names;
  }

  let argString = "";
  if (args) {
    args.forEach(arg => {
      argString += " " + getArgs(arg);
    });
    argString;
  }
  argString = `**${command}${argString ? argString : ""}**`;
  argString = `## Syntax\n\n${argString}\n\n`;
  return argString;
}

// BODY
function getCommandBody(fileName) {
  let data = fs.readFileSync("./old_commands/" + fileName, "utf8");
  const mdHeadEnd = data.match(/-->/);
  const bodyBeginIndex = mdHeadEnd.index + 3;
  let body = "## Description\n\n" + data.slice(bodyBeginIndex).trim() + "\n";

  // replace /assets/images/ with /img/
  if (body.match(/\/assets\/images\//g)) {
    // console.log(body.match(/\/assets\/images/g).length);
    body = body.replace(/\/assets\/images\//g, "/img/");
  }

  // replace internal link paths that start "/" with "../"
  if (body.match(/\]\(\//g)) {
    // console.log(body.match(/\]\(\//g).length);
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
      // console.log(replacement);
      body = body.replace(match, replacement);
    }
  }

  // replace codeblock tag 'tile38-json' with 'json'
  if (body.match(/\`\`\`tile38-json/g)) {
    // console.log("found a tile38-json match!".cyan);
    body = body.replace(/\`\`\`tile38-json/g, "```json");
  }

  // replace codeblock tag 'tile38' with 'tile38-cli'
  if (body.match(/\`\`\`tile38/g)) {
    // console.log("found a tile38 match!".magenta);
    body = body.replace(/\`\`\`tile38/g, "```tile38-cli");
  }

  return body;
}

// RELATED COMMANDS
function getRelatedCommands(thisCommand, thisGroup, commands) {
  let output = "\n## Related Commands\n\n";
  let relatedCommands = [];

  for (command of Object.keys(commands)) {
    if (commands[command].group === thisGroup) {
      relatedCommands = [...relatedCommands, command];
    }
  }

  sortedCommands = relatedCommands.sort();

  output += sortedCommands
    .map((command, idx) =>
      command === thisCommand
        ? `**[${command}](../commands/${command
            .toLowerCase()
            .replace(" ", "-")}.md)**<br>`
        : `[${command}](../commands/${command
            .toLowerCase()
            .replace(" ", "-")}.md)<br>`
    )
    .join("\n");

  return output;
}

// WRITE FILE
function writeFile(
  name,
  header = null,
  syntax = null,
  commandBody = null,
  relatedCommands = null
) {
  const content =
    (header ? header : "") +
    (syntax ? syntax : "") +
    (commandBody ? commandBody : "") +
    (relatedCommands ? relatedCommands : "");

  fs.writeFile(`../docs/commands/${name}.md`, content, function(err) {
    if (err) throw err;
    console.log(`${name} Saved!`);
  });
}
