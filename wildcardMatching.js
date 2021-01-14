// 44. Wildcard Matching

// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Solution 1 O(n*m) time | O(n*m) space

var isMatch = function(s, p) {
  let isFirst = true;
  let newPattern = [];
  for (let i = 0; i < p.length; i++) {
      if (p[i] === '*') {
          if (isFirst) {
              isFirst = false;
              newPattern.push(p[i]);
          }
      } else {
          newPattern.push(p[i]);
          isFirst = true;
      }
  }
  let dp = new Array(s.length + 1).fill(false).map(() => new Array(newPattern.length + 1).fill(false));
  dp[0][0] = true;
  if (newPattern[0] === '*') dp[0][1] = true;
  for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= newPattern.length; j++) {
          if (newPattern[j - 1] === '?' || s[i - 1] === newPattern[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else if (newPattern[j - 1] === '*') {
              dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          }
      }
  }
  return dp[s.length][newPattern.length];
};
