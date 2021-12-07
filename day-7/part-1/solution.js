const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input
  .split(",")
  .map(Number)
  .sort((a, b) => a - b);

const median = splinput[Math.floor(splinput.length / 2)];

let fuelused = 0;
for (let n of splinput) {
  fuelused += Math.abs(median - n);
}

console.log(fuelused);
