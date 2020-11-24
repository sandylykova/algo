// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.

// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Solution 1

var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;
  let allComboDict = new Map();
  let len = beginWord.length;
  wordList.forEach(word => {
      for (let i = 0; i < len; i++) {
          let newWord = word.substring(0, i) + '*' + word.substring(i + 1, len);
          if (allComboDict.has(newWord)) {
              let transformations = allComboDict.get(newWord);
              transformations.push(word);
              allComboDict.set(newWord, transformations);
          } else {
              allComboDict.set(newWord, [word]);
          }
      }
  });
  let queue = [[beginWord, 1]];
  let visited = new Map();
  visited.set(beginWord, true);
  while (queue.length > 0) {
      let node = queue.shift();
      let word = node[0];
      let level = node[1];
      for (let i = 0; i < len; i++) {
          let newWord = word.substring(0, i) + '*' + word.substring(i + 1, len);
          let allCombo = allComboDict.get(newWord);
          if (allCombo) {
              for (let i = 0; i < allCombo.length; i++) {
              let word = allCombo[i];
              if (word === endWord) return level + 1;
              if (!visited.get(word)) {
                  visited.set(word, true);
                  queue.push([word, level + 1]);
              }
           }
          allComboDict.set(newWord, []);
          }
      }
  }
  return 0;
};
