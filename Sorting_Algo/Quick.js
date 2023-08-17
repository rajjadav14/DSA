function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotIndex(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      //swap(arr, swapIdx, i);
    }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
  //swap(arr, start, swapIdx);
  return swapIdx;
}

// old
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotIndex(arr, left, right);
    //left
    quickSort(arr, left, pivot - 1);
    //right
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

//new and easy
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

const arr = [5, 3, 2, 7, 88, 99, 8, 76];
console.log(quickSort(arr));
