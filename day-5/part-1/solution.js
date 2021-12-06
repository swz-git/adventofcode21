const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split("\n").map((r) =>
  r.split(" -> ").map((c) => {
    return { x: +c.split(",")[0], y: +c.split(",")[1] };
  })
);

// Find biggest x and y values
let maxX = 0;
let maxY = 0;
for (let pair of splinput) {
  for (let point of pair) {
    if (point.x > maxX) {
      maxX = point.x;
    }
    if (point.y > maxY) {
      maxY = point.y;
    }
  }
}

// Create a matrix of the correct size filled with zeros
const matrix = new Array(maxY + 1)
  .fill(0)
  .map(() => new Array(maxX + 1).fill(0));

for (let line of splinput) {
  if (line[0].x === line[1].x) {
    line = line.sort((a, b) => a.y - b.y);
    // Vertical line
    for (let y = line[0].y; y <= line[1].y; y++) {
      matrix[y][line[0].x]++;
    }
  }
  if (line[0].y === line[1].y) {
    line = line.sort((a, b) => a.x - b.x);
    // Horizontal line
    for (let x = line[0].x; x <= line[1].x; x++) {
      matrix[line[0].y][x]++;
    }
  }
}

console.log(matrix.flat().filter((n) => n > 1).length);
