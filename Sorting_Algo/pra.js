function printFibbo(n) {
  let n1 = 0,
    n2 = 1,
    next,
    res = [];

  for (let i = 1; i <= n; i++) {
    res.push(n1);
    let next = n1 + n2;

    n2 = next;
  }
  return res;
}

const ar = [];

function countSteps(num, stack) {
  let total = 0;

  stack.forEach((ele) => (total += ele));
  if (total == 4) {
    ar.push(stack);
    return;
  }

  if (total > 4) {
    return;
  }
  if (total < 4) {
    countSteps(num, [...stack, 1]);
    countSteps(num, [...stack, 2]);
  }
}
//countSteps(5, []);

function towerOfHanoi(num, aRod, bRod, cRod) {
  if (num == 0) return;

  towerOfHanoi(num - 1, aRod, cRod, bRod);
  console.log(
    "Move disk " + num + " from rod " + aRod + " to rod " + bRod + "<br/>"
  );
  towerOfHanoi(num - 1, cRod, bRod, aRod);
}

function mergeArr(ar1, ar2) {
  let res = [];
  while (ar1.length && ar2.length) {
    if (ar1[0] < ar2[0]) {
      res.push(ar1.shift());
    } else {
      res.push(ar2.shift());
    }
  }
  res.push(...ar1, ...ar2);
  return res;
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return mergeArr(left, right);
}

function swapElements(arr, ind1, ind2) {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

function quickSort(arr) {
  if (arr.length > 2) return arr;

  let pivot = arr[0];
  let left = [],
    right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

//console.log(quickSort([5, 3, 2, 7, 88, 99, 8, 76]));
//console.log(towerOfHanoi(35, "A", "C", "B"));

function removeDuplicates(str, ans = "") {
  if (!str) return ans;
  if (!ans.includes(str[0])) {
    ans += str[0];
  }
  return removeDuplicates(str.slice(1), ans);
}
// const asp = removeDuplicates("aafgvvrrtgg");
// console.log(asp);

function strToInt(str, num = 0) {
  if (!str) return num;
  num += str[0] * Math.pow(10, str.length - 1);
  return strToInt(str.slice(1), num);
}
//console.log(strToInt("3412"));

function calcVolume(arr, secondLowest) {
  let vol = 0;
  arr.forEach((ele) => {
    if (secondLowest - ele > 0) vol += secondLowest - ele;
  });
  return vol;
}

function trapWater(height) {
  let high = 0,
    low = 0,
    i = 0;

  let total = 0;

  while (i < height.length) {
    if (i == 0 && height[i] == 0) {
      i++;
      continue;
    }
    if (height[i] <= height[low]) {
      low = i;
    } else if (height[i] > height[low] && !(height[i + 1] >= height[i])) {
      total += calcVolume(
        height.slice(high, i + 1),
        height[i] > height[high] ? height[high] : height[i]
      );
      high = i;
      low = i;
    }
    i++;
  }
  return total;
}

function newMethod(arr) {
  let high = -1,
    low = -1,
    i = 0;
  let flag = true;

  let total = 0;

  while (i < arr.length) {
    if (arr[i] == 0 && flag) {
      i++;
      continue;
    }
    if (high < 0 && low < 0) {
      flag = false;
      high = i;
      low = i;
    }

    if (arr[i] < arr[low]) {
      low = i;
    } else if (arr[i] > arr[low]) {
      if (low - high < 1) {
        high = i;
        low = i;
        i++;
        continue;
      }
      if (arr[i] >= (arr[i + 1] || 0)) {
        let max = arr[high] > arr[i] ? nextMax(arr, high, i) : 0;
        let pivot = Math.max(max, i);
        let min = Math.min(arr[high], arr[pivot]);
        low = pivot;
        i = pivot;
        while (low > high) {
          if (min - arr[high + 1] > 0) total += min - arr[high + 1];
          high++;
        }

        high = pivot;
      }
    }
    i++;
  }
  return total;
}

function nextMax(arr, high, current) {
  let max = high;
  let second = current;
  for (let i = current + 1; i < arr.length; i++) {
    if (arr[i] >= arr[max]) {
      return i;
    }
    if (arr[i] >= arr[second]) {
      second = i;
    }
  }

  return max == high ? second : max;
}

var trap = function (height) {
  let max1 = 0;
  //create left array so that we find the maximum element on its left...
  let left = [height.length];
  // Scan every element from left to right...
  for (let i = 0; i < height.length; i++) {
    // Find maximum element on its left...
    if (max1 < height[i]) {
      max1 = height[i];
    }
    left[i] = max1;
  }

  let max2 = 0;
  //create right array so that we find the maximum element on its right...
  let right = [height.length];
  // Scan every element from right to left...
  for (let i = height.length - 1; i >= 0; i--) {
    // Find maximum element on its left...
    if (max2 < height[i]) {
      max2 = height[i];
    }
    right[i] = max2;
  }

  // To store the maximum water that can be stored..
  let trap = 0;
  // Scan and Calculate maximum trapped water...
  for (let i = 0; i < height.length; i++) {
    trap += Math.min(left[i], right[i]) - height[i];
  }
  return trap; //return the amount..
};

function nthFeboNum(n, sum) {
  if (n < 2) {
  }
}

var isValidSudoku = function (board) {
  let ar1 = [];
  let ar2 = [];
  let ar3 = [];

  for (let i = 0; i < board.length; i++) {
    const checkarr = [];
    if (i == 3 || i == 6) {
      ar1 = [];
      ar2 = [];
      ar3 = [];
    }
    for (let j = 0; j < board[i].length; j++) {
      const err = board[i].filter((item, index) => {
        return item !== "." && board[i].indexOf(item) !== index;
      });
      if (err.length > 0) return false;
      const item = board[j][i];
      if (board[j][i] !== ".") {
        if (checkarr.includes(board[j][i])) return false;
        checkarr.push(board[j][i]);
      }
      if (board[i][j] !== ".") {
        if (j < 3) {
          if (ar1.includes(board[i][j])) return false;
          ar1.push(board[i][j]);
        } else if (j < 6) {
          if (ar2.includes(board[i][j])) return false;
          ar2.push(board[i][j]);
        } else {
          if (ar3.includes(board[i][j])) return false;
          ar3.push(board[i][j]);
        }
      }
    }
  }

  return true;
};

function validateSudoku(s) {
  let ar = [];
  let har0 = [];
  let har1 = [];
  let har2 = [];

  for (let i = 0; i < s.length; i++) {
    ar = [];
    if (i == 3 || i == 6) {
      har0 = [];
      har1 = [];
      har2 = [];
    }
    for (let j = i; j < s[i].length; j++) {
      if (ar.includes(s[i][j])) return false;
      ar.push(s[i][j]);
      if (j < 3) {
        if (har0.includes(s[i][j])) return false;
        har0.push(s[i][j]);
      } else if (j >= 3 || j < 6) {
        if (har1.includes(s[i][j])) return false;
        har2.push(s[i][j]);
      } else {
        if (har2.includes(s[i][j])) return false;
        har2.push(s[i][j]);
      }
    }
  }

  return true;
}

let su1 = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],
  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],
  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

console.log(validateSudoku(su1));
