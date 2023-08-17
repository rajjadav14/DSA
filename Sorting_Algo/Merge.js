function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function merge_Arrays(left_sub_array, right_sub_array) {
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] < right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}

function mergeSort(arr) {
  debugger;
  if (arr.length == 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge_Arrays(left, right);
}

const arr = [10, 5, 99, 3, 4, 1, 9, 56, 73, 45, 90, 22, 31, 26];

console.log(mergeSort(arr));

//console.log(arr.sort((a, b) => a - b));
