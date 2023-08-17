function getDigit(num, index) {
  return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
  return num.toString().split("").length;
}

function highestDigit(nums) {
  let highest = 0;
  nums.forEach((num) => {
    let digit = digitCount(num);
    highest = digit > highest ? digit : highest;
  });
  return highest;
}

function radixSort(nums) {
  let maxDigit = highestDigit(nums);
  let bucket = [];
  let count = 0;

  while (maxDigit > 0) {
    nums.forEach((num) => {
      let digit = getDigit(num, count);
      bucket[digit] = bucket[digit] ? [...bucket[digit], num] : [num];
    });
    nums = [];
    bucket.forEach((item) => {
      nums.push(...item);
    });
    bucket = [];
    maxDigit--;
    count++;
  }

  return nums;
}

console.log(radixSort([2, 33, 89, 444, 5555, 33, 1, , 34, 22222]));
