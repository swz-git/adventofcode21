const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split(",");

let fishcounter = new Array(9).fill(0);

for (let fish of splinput) {
  fishcounter[fish]++;
}

for (let i = 0; i < 256; i++) {
  const newFish = fishcounter.shift();
  fishcounter.push(newFish);
  fishcounter[6] += newFish;
}

console.log(fishcounter.reduce((a, b) => a + b));
