// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Solution 1 with backtracking

var generateParenthesis = function(n) {
  let results = [];
  function  helperGenerateParenthesis(left, right, str) {
      if (left > right) return ;
      if (left === 0 && right === 0) {
          results.push(str);
          return;
      }
      if (left > 0) {
          helperGenerateParenthesis(left - 1, right, str + '(');
      }
      if (right > 0) {
          helperGenerateParenthesis(left, right - 1, str + ')');
      }
  }
  helperGenerateParenthesis(n, n, '');
  return results;
};
