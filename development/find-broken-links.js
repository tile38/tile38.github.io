const fs = require("fs");

const oldTopicsPath = "./old_topics/";
const oldCommandsPath = "./old_commands/";

const newTopicsPath = "./../docs/topics/";
const newCommandsPath = "./../docs/commands/";

const oldPaths = [oldTopicsPath, oldCommandsPath];
const newPaths = [newTopicsPath, newCommandsPath];

for (path of newPaths) {
  const files = fs.readdirSync(path);
  files.forEach(file => {
    if (file.includes(".md")) {
      const data = fs.readFileSync(path + file, "utf8");

      const commandsLinks = data.match(/\/commands\)/g);
      const gettingStartedLinks = data.match(/getting-started/g);
      const clientsLinks = data.match(/\(\.\/\.\.\/clients\)/g);

      let output = file + ",";
      output += commandsLinks ? commandsLinks.length : 0;
      output += ",";
      output += gettingStartedLinks ? gettingStartedLinks.length : 0;
      output += ",";
      output += clientsLinks ? clientsLinks.length : 0;

      console.log(output);
    }
  });
}

// for (path of oldPaths) {
//   const files = fs.readdirSync(path);
//   files.forEach(file => {
//     if (!file.includes("2") && file.includes(".md")) {
//       const data = fs.readFileSync(path + file, "utf8");

//       // example BROKEN links:
//       // [WITHIN](/commands/within)
//       // [webhooks](/commands/sethook)
//       // example WORKING links:
//       // [WITHIN](./../commands/within)
//       // [webhooks](./../commands/sethook)
//       const slash_links = data.match(/\]\(\//g);
//       if (slash_links) {
//         let output = file + ",";

//         output += slash_links ? slash_links.length : 0;
//         console.log(output);
//       }
//     }
//   });
// }
