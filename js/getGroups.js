const fs = require("fs");

function getGroups() {
  const rawdata = fs.readFileSync("./static/json/commands.json");
  const commands = JSON.parse(rawdata);
  let groups = ["all"];

  for (let command of Object.keys(commands)) {
    let group = commands[command].group;
    group =
      group === "pubsub"
        ? "channels"
        : group === "webhook"
        ? "webhooks"
        : group;
    if (group !== "tests" && !groups.includes(group)) groups.push(group);
  }
  return groups;
}

module.exports = getGroups;
