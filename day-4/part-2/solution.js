const input = require("fs").readFileSync("./input.txt", "utf8");
const splinput = input.split("\n\n");

const allDraws = splinput.shift().split(",");

const boards = splinput.map((b) => {
  return b.split("\n").map((r) => {
    return r.split(/ +/g).filter((n) => n.length > 0);
  });
});

function rotateMatrix(matrix) {
  return matrix[0].map((col, i) => {
    return matrix.map((row) => row[i]);
  });
}

function unmarkedNums(board, draws) {
  return board.flat().filter((val) => !draws.includes(val));
}

function bingoCheck(board, draws) {
  // check if any row has a bingo
  for (let row of board) {
    if (row.every((val) => draws.includes(val))) {
      return true;
    }
  }
  // check if any column has a bingo
  for (let row of rotateMatrix(board)) {
    if (row.every((val) => draws.includes(val))) {
      return true;
    }
  }

  return false;
}

const currentDraws = [];
const futureDraws = allDraws;

let boardsWithBingo = [];
let foundLastBingo = false;
while (futureDraws.length > 0 && !foundLastBingo) {
  currentDraws.push(futureDraws.shift());

  for (let i in boards) {
    let board = boards[i];
    let check = bingoCheck(board, currentDraws);

    if (check !== false && !boardsWithBingo.includes(i)) {
      if (boardsWithBingo.length === boards.length - 1) {
        let unmarkedSum = unmarkedNums(board, currentDraws)
          .map((n) => +n)
          .reduce((prev, cur) => prev + cur);

        let lastDraw = currentDraws[currentDraws.length - 1];

        console.log(unmarkedSum * lastDraw);
        foundLastBingo = true;
        break;
      } else {
        boardsWithBingo.push(i);
      }
    }
  }
}
