// 856. Score of Parentheses

// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// Input: s = "(()(()))"
// Output: 6

// Solution 1 O(n) time | O(n) space

var scoreOfParentheses = function(s) {
  if (!s || !s.length) return 0;
  let count = 0;
  let stack = [];
  for (let char of s) {
      let curValue = 0;
      if (char === '(') stack.push(char);
      else {
          while (stack[stack.length - 1] !== '(') curValue += stack.pop();
          curValue = Math.max(curValue * 2, 1);
          stack.pop();
          stack.push(curValue);
      }
  }
  for (let val of stack) {
      count += val;
  }
  return count;
};
