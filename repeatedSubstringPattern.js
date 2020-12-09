// 459. Repeated Substring Pattern

// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.

// Solution 1

var repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false;
  let middle = s.length / 2;
  for (let i = 0; i < middle; i++) {
      let curr = s.slice(0, i + 1);
      let times = s.length / curr.length;
      if (curr.repeat(times) === s) return true;
  }
  return false;
};
