const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input
  .split("\n")
  .map((line) => line.split(" | ").map((part) => part.split(" ")));

let counter = 0;

for (let display of splinput) {
  for (let digit of display[1]) {
    switch (digit.length) {
      case 7:
        counter++;
        break;
      case 4:
        counter++;
        break;
      case 2:
        counter++;
        break;
      case 3:
        counter++;
        break;
    }
  }
}

console.log(counter);
