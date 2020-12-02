// Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

// Input: "eceba"
// Output: 3
// Explanation: t is "ece" which its length is 3.

// Solution 1 O(n) time | O(1) space

var lengthOfLongestSubstringTwoDistinct = function(s) {
  if (s.length === 0) return 0;
  let map = new Map();
  let left = 0;
  let right = 0;
  let maxLength = -Infinity;
  while (right < s.length) {
      map.set(s[right], map.get(s[right]) + 1 || 1);
      while (map.size > 2) {
          let count = map.get(s[left]) - 1;
          if (count === 0) {
              map.delete(s[left]);
          }
          else map.set(s[left], count);
          left++;
      }
      right++;
      maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
};
