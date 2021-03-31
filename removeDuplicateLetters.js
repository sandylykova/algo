// 316. Remove Duplicate Letters

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// Input: s = "bcabc"
// Output: "abc"

var removeDuplicateLetters = function(s) {
  let freqMap = {};
  for (let char of s) {
      if (freqMap[char] === undefined) freqMap[char] = 0;
      freqMap[char]++;
  }
  let stack = [];
  let uniqueSet = new Set();
  for (let i = 0; i < s.length; i++) {
      freqMap[s[i]]--;
      if (uniqueSet.has(s[i])) continue;
      if (stack.length) {
          while (stack.length && s[i] < stack[stack.length - 1] && freqMap[stack[stack.length - 1]] > 0) {
              uniqueSet.delete(stack[stack.length - 1]);
              stack.pop();
          }
      }
      stack.push(s[i]);
      uniqueSet.add(s[i]);
  }
  return stack.join('');
};
