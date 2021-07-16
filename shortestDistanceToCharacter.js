// 821. Shortest Distance to a Character

// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

// The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]

// Solution 1 O(n) time | O(n) space

var shortestToChar = function(s, c) {
  let seen = s.length;
  let left = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === c) {
          left[i] = 0;
          seen = 0;
      } else {
          left[i] = seen;
      }
      seen = Math.min(seen + 1, s.length);
  }
  seen = s.length;
  let right = [];
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === c) {
          right[i] = 0;
          seen = 0;
      } else {
          right[i] = seen;
      }
      seen = Math.min(seen + 1, s.length);
  }
  let ans = [];
  for (let i = 0; i < s.length; i++) {
      ans[i] = Math.min(left[i], right[i]);
  }
  return ans;
};
