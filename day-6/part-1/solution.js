const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split(",");

let lanternfish = splinput.map(Number);

for (let i = 0; i < 80; i++) {
  for (let i in lanternfish) {
    if (lanternfish[i] === 0) {
      lanternfish[i] = 6;
      lanternfish.push(8);
    } else {
      lanternfish[i]--;
    }
  }
}

console.log(lanternfish.length);
