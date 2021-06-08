const fs = require("fs");
var colors = require("colors");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);

let none = "none";

for (command of Object.keys(commands)) {
  const argsObj = commands[command].arguments;
  let argsString = command;
  // console.log(colors.magenta(argsString));
  if (argsObj) {
    argsObj.forEach(arg => {
      // getCommands(command, arg);
      // getNames(command, arg);
      getTypes(command, arg);
    });
  }
}

function getCommands(cmd, a) {
  // console.log(a);
  if (a.command) {
    if (a.type && !a.name) {
      console.log(
        `${colors.magenta(cmd)} - "command": '${colors.cyan(
          a.command
        )}' - "name": ${colors.yellow(none)} - "type": '${colors.green(
          a.type
        )}'`
      );
    }
    if (isLowerCase(a.command))
      console.log(
        `${colors.magenta(cmd)} - lowercase "command": '${colors.cyan(
          a.command
        )}'`
      );
  }

  if (a.enumargs) {
    for (earg of a.enumargs) {
      if (earg.command) {
        if (isLowerCase(earg.command))
          console.log(
            `${colors.magenta(cmd)} has a lowercase "command" '${colors.cyan(
              earg.command
            )}'`
          );
      }

      if (earg.arguments) {
        earg.arguments.forEach(arg => getCommands(cmd, arg));
      }
    }
  }
}

function getNames(cmd, argsObj) {
  let names = [];

  const name = argsObj.name;

  if (name) {
    if (!argsObj.type)
      console.log(
        `${colors.magenta(cmd)} - "name": '${colors.yellow(
          name
        )}' - "type": ${colors.grey(none)}`
      );
    names = typeof name === "string" ? [...names, name] : [...names, ...name];
  } else if (argsObj.length > 0) {
    argsObj.forEach(item => {
      names.push(item.name);
    });
  }

  for (n of names) {
    if (!isLowerCase(n))
      console.log(
        `${colors.magenta(cmd)} has an uppercase "name" key '${colors.yellow(
          n
        )}'`
      );
  }
}

function getTypes(cmd, a) {
  if (a.type && !a.name) {
    console.log(`${colors.magenta(cmd)} has "type" without "name"`);
  }

  if (a.enumargs) {
    for (earg of a.enumargs) {
      if (earg.type && !earg.name) {
        console.log(
          `${colors.magenta(
            cmd
          )} has enumarg ${earg} that has "type" without "name"`
        );
      }

      if (earg.arguments) {
        earg.arguments.forEach(arg => getTypes(cmd, arg));
      }
    }
  }
}

function isLowerCase(word) {
  const lcWord = word.toLowerCase();
  return lcWord === word;
}
