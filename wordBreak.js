// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true

// Solution 1 O(n^2) time | O(n) space

var wordBreak = function(s, wordDict) {
  let dictionary = new Set(wordDict);
  let queue = [0];
  let visited = new Set();
  while (queue.length > 0) {
      let currIdx = queue.shift();
      if (!visited.has(currIdx)) {
          for (let i = currIdx; i < s.length; i++) {
              let substring = s.slice(currIdx, i + 1);
              if (dictionary.has(substring)) {
                  if (i === s.length - 1) {
                  return true;
                  }
                  queue.push(i + 1);
              }
          }
      }
      visited.add(currIdx);
  }
  return false;
};
