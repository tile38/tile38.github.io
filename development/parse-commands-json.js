const fs = require("fs");
var colors = require("colors");

const rawdata = fs.readFileSync("commands.json");
const commands = JSON.parse(rawdata);

let groups = [];

for (let command of Object.keys(commands)) {
  const name = commands[command].group;
  
}

// let groups = {};

// for (let command of Object.keys(commands)) {
//   const thisGroup = commands[command].group;
//   if (groups[thisGroup]) {
//     groups[thisGroup] = [...groups[thisGroup], command];
//   } else {
//     groups[thisGroup] = [command];
//   }
// }

// for (let group in groups) {
//   console.log(group);
// }

// for (command of Object.keys(commands)) {
//   const argsObj = commands[command].arguments;
//   let argsString = command;
//   if (argsObj) {
//     argsObj.forEach(arg => {
//       argsString += " " + getArgs(arg);
//     });
//   }
// }

// function getArgs(a) {
//   let s = "";

//   if (a.command) {
//     s += " " + a.command;
//   }

//   if (a.enumargs) {
//     let eargs = "";
//     for (earg of a.enumargs) {
//       let v = earg.name ? earg.name + " " : "";
//       v += earg.arguments ? getArgs(earg.arguments) : "";

//       v = v.trim();
//       if (v.includes(" ")) {
//         v = "(" + v + ")";
//       }
//       eargs += v + "|";
//     }

//     if (eargs.length > 0) {
//       eargs = eargs.slice(0, eargs.length - 1);
//     }
//     s += " " + eargs;
//   } else if (a.enum) {
//     s += " " + a.enum.join("|");
//   } else {
//     let names = getNames(a);
//     let subs = "";

//     for (name of names) {
//       subs += " " + name;
//     }
//     subs = subs.trim();
//     s += " " + subs;

//     if (a.variadic) {
//       if (names.length === 0) {
//         s += " [" + subs + " ...]";
//       } else {
//         s += " [" + names[names.length - 1] + "...]";
//       }
//     }
//     if (a.multiple) {
//       s += " ...";
//     }
//   }
//   s = s.trim();
//   if (a.optional) {
//     s = "[" + s + "]";
//   }

//   return s;
// }

// function getNames(argsObj) {
//   let names = [];

//   const name = argsObj.name;

//   if (name) {
//     names = typeof name === "string" ? [...names, name] : [...names, ...name];
//   } else if (!argsObj.command) {
//     argsObj.forEach(item => {
//       names.push(item.name);
//     });
//   }

//   return names;
// }
