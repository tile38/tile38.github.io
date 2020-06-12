const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("commands-list.html");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  let numLines = 0;
  for await (const line of rl) {
    const regex = /href="\/commands\/([\S]+)/;
    // Each line in input.txt will be successively available here as `line`.
    let found = line.match(regex);
    if (found) {
      console.log(found[1].replace('">', ""));
      numLines++;
    }
  }

  console.log("NUMBER OF LINES: ", numLines);
}

processLineByLine();
