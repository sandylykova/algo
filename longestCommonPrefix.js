// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Solution 1

var longestCommonPrefix = function(strs) {
  let commonPrefix = '';
  if (strs.length === 0) return commonPrefix;
  let comparisonIndex = 0;
  let comparisonWord = strs[0];
  for (let comparisonLetter of comparisonWord) {
      for (let i = 1; i < strs.length; i++) {
          let currWord = strs[i];
          let currLetter = currWord.charAt(comparisonIndex);
          if (currLetter !== comparisonLetter || comparisonIndex >= currWord.length) {
              return commonPrefix;
          }
      }
      comparisonIndex++;
      commonPrefix += comparisonLetter;
  }
  return commonPrefix;
};
