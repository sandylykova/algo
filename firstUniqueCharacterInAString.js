// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

var firstUniqChar = function(s) {
  let memo = {};
  for (let i = 0; i < s.length; i++) {
      if (s[i] in memo) {
          memo[s[i]] += 1;
      } else {
          memo[s[i]] = 1;
      }
  }
  for (let j = 0; j < s.length; j++) {
      if (memo[s[j]] === 1) return j;
  }
  return -1;
};
