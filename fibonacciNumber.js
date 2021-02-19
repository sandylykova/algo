// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Solution 1

var fib = function(n) {
  let memo = new Map();
  memo.set(0, 0);
  memo.set(1, 1);
  function getFib(n, memo) {
      if (memo.has(n)) return memo.get(n);
      let result = getFib(n - 1, memo) + getFib(n - 2, memo);
      memo.set(n, result);
      return result;
  }
  return getFib(n, memo);
};
