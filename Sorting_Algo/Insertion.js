function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

console.log(insertionSort([4, 2, 6, 5, 1, 3, 56, 98, 200, 21, 9, 7, 71, 89]));
