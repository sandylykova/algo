// 243. Shortest Word Distance

// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// Solution 1 O(n^2) time | O(n) space

var shortestDistance = function(wordsDict, word1, word2) {
  let idx1 = [];
  let idx2 = [];
  for (let i = 0; i < wordsDict.length; i++) {
      let word = wordsDict[i];
      if (word === word1) {
          idx1.push(i);
      }
      if (word === word2) {
          idx2.push(i);
      }
  }
  let min = Infinity;
  for (let i = 0; i < idx1.length; i++) {
      for (let j = 0; j < idx2.length; j++) {
          min = Math.min(Math.abs(idx1[i] - idx2[j]), min);
      }
  }
  return min;
};

// Solution 2 O(n) time | O(1) space

var shortestDistance = function(wordsDict, word1, word2) {
  let idx1 = -1;
  let idx2 = -1;
  let min = Infinity;
  for (let i = 0; i < wordsDict.length; i++) {
      let word = wordsDict[i];
      if (word === word1) {
          idx1 = i;
      }
      if (word === word2) {
          idx2 = i;
      }
      if (idx1 !== -1 && idx2 !== -1) {
          min = Math.min(Math.abs(idx1 - idx2), min);
      }
  }
  return min;
};
