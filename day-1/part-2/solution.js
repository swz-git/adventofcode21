const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split("\n").map((n) => Number(n));

let prev = splinput[0];
let increases = 0;

for (let i in splinput) {
  let num = [splinput[i], splinput[i - 1], splinput[i - 2]].reduce(
    (a, b) => a + b
  );
  if (num > prev) {
    increases++;
  }
  prev = num;
}

console.log(increases);
