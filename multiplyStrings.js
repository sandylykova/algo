// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Input: num1 = "123", num2 = "456"
// Output: "56088"

// Solution 1 O(n * m) time | O(n + m) space

var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let holder = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {
      for (let j = num2.length - 1; j >= 0; j--) {
          let currentMultiply = num1[i] * num2[j];
          let positionForRemainder = i + j + 1;
          let positionForCarry = i + j;
          let sum = holder[positionForRemainder] + currentMultiply;
          holder[positionForRemainder] = sum % 10;
          holder[positionForCarry] += Math.floor(sum / 10);
      }
  }
  let result = [];
  for (let i = 0; i < holder.length; i++) {
      if (holder[i] === 0 && i === 0) continue;
      result.push(holder[i]);
  }
  return result.join('');
};
