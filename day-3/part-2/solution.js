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

let ogrinput = splinput;
for (let i = 0; i < bitsPerRow; i++) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let row of ogrinput) {
    let char = row.split("")[i];
    if (char === "1") {
      oneCount++;
    } else {
      zeroCount++;
    }
  }
  let correctchar = oneCount >= zeroCount ? "1" : "0";
  ogrinput = ogrinput.filter((row) => {
    let char = row.split("")[i];
    return char === correctchar;
  });
}

let csrinput = splinput;
for (let i = 0; i < bitsPerRow; i++) {
  let zeroCount = 0;
  let oneCount = 0;
  for (let row of csrinput) {
    let char = row.split("")[i];
    if (char === "1") {
      oneCount++;
    } else {
      zeroCount++;
    }
  }
  let correctchar = zeroCount > oneCount ? "1" : "0";
  if (csrinput.length > 1) {
    csrinput = csrinput.filter((row) => {
      let char = row.split("")[i];
      return char === correctchar;
    });
  }
}

console.log(toNum(csrinput[0]) * toNum(ogrinput[0]));
