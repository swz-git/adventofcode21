const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input
  .split("\n")
  .map((line) => line.split(" | ").map((part) => part.split(" ")));

let counter = 0;

function remove(list) {
  return (item) => {
    return !list.includes(item);
  };
}
function keep(list) {
  return (item) => {
    return list.includes(item);
  };
}

const values = {
  abcefg: 0,
  cf: 1,
  acdeg: 2,
  acdfg: 3,
  bcdf: 4,
  abdfg: 5,
  abdefg: 6,
  acf: 7,
  abcdefg: 8,
  abcdfg: 9,
};

for (let display of splinput) {
  let everyPossibility = ["a", "b", "c", "d", "e", "f", "g"];
  let possibilities = {
    a: everyPossibility,
    b: everyPossibility,
    c: everyPossibility,
    d: everyPossibility,
    e: everyPossibility,
    f: everyPossibility,
    g: everyPossibility,
  };
  function removePossibilities(arr1, arr2) {
    for (x of arr1) {
      possibilities[x] = possibilities[x].filter(keep(arr2));
    }
  }
  for (let digit of display[0]) {
    switch (digit.length) {
      case 2:
        removePossibilities("cf".split(""), digit);
        break;
      case 3:
        removePossibilities("acf".split(""), digit);
        break;
      case 4:
        removePossibilities("bcdf".split(""), digit);
        break;
      case 5:
        removePossibilities("adg".split(""), digit);
        break;
      case 6:
        removePossibilities("abfg".split(""), digit);
        break;
    }
    for (let entry of Object.entries(possibilities)) {
      if (entry[1].length === 1) {
        for (let entry2 of Object.entries(possibilities)) {
          if (entry2[0] === entry[0]) continue;
          possibilities[entry2[0]] = entry2[1].filter(remove(entry[1][0]));
        }
      }
    }
  }
  for (let entry of Object.entries(possibilities)) {
    if (entry[1].length === 1) {
      for (let entry2 of Object.entries(possibilities)) {
        if (entry2[0] === entry[0]) continue;
        possibilities[entry2[0]] = entry2[1].filter(remove(entry[1][0]));
      }
    }
  }

  let segmentMap = Object.fromEntries(
    Object.entries(possibilities).map((e) => {
      e[1] = e[1][0];
      return e.reverse();
    })
  );

  let displayValue = "";
  for (let digit of display[1]) {
    digit = digit
      .split("")
      .map((s) => segmentMap[s])
      .sort()
      .join("");
    value = values[digit];
    if (value === undefined) {
    }
    displayValue += value + "";
  }
  counter += +displayValue;
}

console.log(counter);
