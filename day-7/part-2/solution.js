const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input
  .split(",")
  .map(Number)
  .sort((a, b) => a - b);

const average = Math.floor(splinput.reduce((a, b) => a + b) / splinput.length);

function getFuelUsage(steps) {
  let total = 0;
  for (; steps > 0; steps--) total += steps;
  return total;
}

let fuelused = 0;
for (let n of splinput) {
  fuelused += getFuelUsage(Math.abs(average - n));
}

console.log(fuelused);
