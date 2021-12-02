const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split("\n");

let horizontal = 0;
let depth = 0;
for (let instruction of splinput) {
  let command = instruction.split(" ")[0];
  let num = +instruction.split(" ")[1];

  switch (command) {
    case "forward":
      horizontal += num;
      break;
    case "up":
      depth -= num;
      break;
    case "down":
      depth += num;
      break;
  }
}

console.log(horizontal * depth);
