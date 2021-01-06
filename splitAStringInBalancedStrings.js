// 1221. Split a String in Balanced Strings

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Solution 1 O(n) time | O(1) space

var balancedStringSplit = function(s) {
  let left = 0;
  let right = 0;
  let p = 0;
  let counter = 0;
  while (p < s.length) {
      let curr = s[p];
      if (curr === 'R') right++;
      if (curr === 'L') left++;
      if (left === right) {
          left = 0;
          right = 0;
          counter++;
      }
      p++;
  }
  return counter;
};
