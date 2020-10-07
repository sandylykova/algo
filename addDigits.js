// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Solution 1 recursive

var addDigits = function(num) {
  if (num < 10) return num;
  let arr = ("" + num).split("");
  if (arr.length === 1) return +arr.join('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
     sum += +arr[i];
  }
  return addDigits(sum);
};
