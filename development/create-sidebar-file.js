const fs = require("fs");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);
let categories = {
  docs: {
    "Getting Started": [
      "topics/installation",
      "topics/object-types",
      "topics/command-line-interface",
      "topics/network-protocols",
      "topics/client-libraries",
      "topics/replication",
      "commands/index"
    ],
    Geofences: ["topics/geofencing", "topics/roaming-geofences"]
  }
};

const rootDir = "commands/";
let noLabelCommands = [];
// common commands pushed to commonGroup subcat, not-common commands to Commands
for (command of Object.keys(commands)) {
  const fileId = rootDir + command.toLowerCase().replace(" ", "-");
  noLabelCommands.push(fileId);
}

// sort commands included in All Commands file
// ("no_label" distinction hides links in sidebar)
noLabelCommands = noLabelCommands.sort();

categories.docs["Getting Started"] = [
  ...categories.docs["Getting Started"],
  ...noLabelCommands
];

// // write content to file
const content = JSON.stringify(categories);
fs.writeFile(`../website/sidebars.json`, content, function(err) {
  if (err) throw err;
  console.log(`Saved!`);
});
