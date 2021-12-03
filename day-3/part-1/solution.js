const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split("\n");

let bitsPerRow = splinput[0].length;

function toNum(str) {
  let arr = str.split("").reverse();
  let total = 0;
  let bitval = 1;
  for (let bit of arr) {
    if (bit === "1") total += bitval;
    bitval *= 2;
  }
  return total;
}

let gammastring = "";
let epsilonstring = "";

for (let i = 0; i < bitsPerRow; i++) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let row of splinput) {
    let char = row.split("")[i];
    if (char === "1") {
      oneCount++;
    } else {
      zeroCount++;
    }
  }
  gammastring += oneCount > zeroCount ? "1" : "0";
  epsilonstring += oneCount < zeroCount ? "1" : "0";
}

console.log(toNum(gammastring) * toNum(epsilonstring));
