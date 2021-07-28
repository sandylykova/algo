// 32. Longest Valid Parentheses

// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Solution 1 O(n) time | O(1) space

var longestValidParentheses = function(s) {
  let open = 0;
  let close = 0;
  let max = 0;
  for (let char of s) {
      if (char === '(') open += 1;
      else close += 1;
      if (close === open) {
          max = Math.max(max, open * 2);
      }
      if (close > open) {
          open = 0;
          close = 0;
      }
  }
  open = 0;
  close = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ')') close++;
      else open++;
      if (close === open) {
          max = Math.max(max, open * 2);
      }
      if (open > close) {
          open = 0;
          close = 0;
      }
  }
  return max;
};
