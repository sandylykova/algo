// 1163. Last Substring in Lexicographical Order

// Given a string s, return the last substring of s in lexicographical order.

// Input: s = "abab"
// Output: "bab"
// Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".

// Solution 1

var lastSubstring = function(s) {
  let candidates = [[s[0], 0]];
  for (let i = 1; i < s.length; i++) {
      if (candidates[candidates.length - 1][0] < s[i]) {
          candidates = [[s[i], i]];
      } else if (candidates[candidates.length - 1][0] === s[i]) {
          candidates.push([s[i], i]);
      }
  }
  let maxSubstring = '';
  for (let candidate of candidates) {
      let curr = s.slice(candidate[1]);
      if (curr > maxSubstring) {
          maxSubstring = curr;
      }
  }
  return maxSubstring;
};
