const fs = require("fs");

function getCommands() {
  const rawdata = fs.readFileSync("./static/json/commands.json");
  const commands = JSON.parse(rawdata);
  let allCommands = {};
  const commonCommands = [
    "SET",
    "GET",
    "DEL",
    "NEARBY",
    "INTERSECTS",
    "WITHIN",
    "SETHOOK",
    "SETCHAN",
    "SUBSCRIBE"
  ];

  for (let command of Object.keys(commands)) {
    const fileName = command.toLowerCase().replace(" ", "-");
    const summary = commands[command].summary;
    const isCommon = commonCommands.includes(command);
    let group = commands[command].group;
    group =
      group === "pubsub"
        ? "channels"
        : group === "webhook"
        ? "webhooks"
        : group;
    allCommands[command] = { group, isCommon, summary, fileName };
  }
  return allCommands;
}

module.exports = getCommands;
