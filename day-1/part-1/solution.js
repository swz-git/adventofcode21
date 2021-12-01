const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split("\n").map((n) => Number(n));

let prev = splinput[0];
let increases = 0;

for (let num of splinput) {
  if (num > prev) {
    increases++;
  }
  prev = num;
}

console.log(increases);
