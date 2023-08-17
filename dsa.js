"use strict";

const checkColumnRule = (table, colInd) => {
  let set = [];
  for (let i = 0; i < table.length; i++) {
    if (table[colInd][i] == ".") continue;
    if (set.includes(table[i][colInd])) {
      return false;
    }

    set.push(table[colInd][i]);
  }
  return true;
};

const checkRowRule = (table, rowInd) => {
  let set = [];
  for (let i = 0; i < table[rowInd].length; i++) {
    if (table[rowInd][i] == ".") continue;
    if (set.includes(table[rowInd][i])) {
      return false;
    }

    set.push(table[rowInd][i]);
  }
  return true;
};

const checkBoxRule = (table, boxId) => {
  let rowStart = 0;
  let rowEnd = 0;
  let colStart = 0;
  let colEnd = 0;

  switch (boxId) {
    case 0:
      colStart = 0;
      colEnd = 2;
      rowStart = 0;
      rowEnd = 2;
      break;

    case 1:
      rowStart = 0;
      rowEnd = 2;
      colStart = 3;
      colEnd = 5;
      break;

    case 2:
      rowStart = 0;
      rowEnd = 2;
      colStart = 6;
      colEnd = 8;
      break;

    case 3:
      colStart = 0;
      colEnd = 2;
      rowStart = 3;
      rowEnd = 5;
      break;

    case 4:
      colStart = 3;
      colEnd = 5;
      rowStart = 3;
      rowEnd = 5;
      break;

    case 5:
      colStart = 6;
      colEnd = 8;
      rowStart = 3;
      rowEnd = 5;
      break;

    case 6:
      colStart = 0;
      colEnd = 2;
      rowStart = 6;
      rowEnd = 8;
      break;

    case 7:
      colStart = 3;
      colEnd = 5;
      rowStart = 6;
      rowEnd = 8;
      break;
    case 7:
      colStart = 6;
      colEnd = 8;
      rowStart = 6;
      rowEnd = 8;
      break;

    default:
      return false;
  }
  let set = [];

  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      if (table[i][j] == ".") continue;
      if (set.includes(table[i][j])) {
        return false;
      }

      set.push(table[i][j]);
    }
  }

  return true;
};

const solveSudoku = (table, rowId = 0, colId = 0, full = false) => {
  if (full) return table;

  for (let i = rowId; i < table.length; i++) {
    for (let j = colId; j < table[rowId].length; j++) {
      if (table[i][j] == ".") {
        let k = 1;
        while (k < 10) {
          table[i][j] = `${k}`;
          let next = true;
          let boxId = Math.floor(i / 3) * 3 + Math.floor(j / 3);
          let isPossible =
            checkColumnRule(table, j) &&
            checkRowRule(table, i) &&
            checkBoxRule(table, boxId);

          if (isPossible) {
            let done = i == 8 && j == 8 ? true : false;
            next = solveSudoku(table, i, j + 1, done);
          } else {
            table[i][j] = ".";
          }

          if (k == 9) {
            table[i][j] = ".";
            return false;
          }
          k++;
        }
      }
    }
  }
};

solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

let str = Number("2");

let arr = [2, 45, 11, 33, 21, 41];

const reverseArr = (arr) => {
  let new1 = [];
  arr.forEach((ele) => new1.unshift(ele));
  return new1;
};

const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false,
}); // target.foo is a read-only property

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
  hello: () => "hello person",
};

const per = Object.create(person, {
  foo: {
    writable: true,
    configurable: true,
    value: "hello",
  },
});

console.log(per.hello());
per.name = "arpan";
per.isHuman = true;
console.log(per);
console.log(per.foo);

// fetch(" https://wwieul8ef0.execute-api.ap-south-1.amazonaws.com/prod/notes", {
//   headers: {
//     "Content-Type": "application/json",
//     app_user_id: "test_user",
//     app_user_name: "TestUser",
//   },
// })
//   .then((response) => response.json())
//   // .then((response) => console.log(response))
//   .catch((err) => console.error(err));
