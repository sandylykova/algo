// 126. Word Ladder II

// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

// Only one letter can be changed at a time
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]

// Solution 1

var findLadders = function(beginWord, endWord, wordList) {
  let result = [];
  if (!wordList.includes(endWord)) return result;
  let allCombo = createAdjList([beginWord, ...wordList]);
  let distances = bfs(beginWord, endWord, allCombo);
  function dfs(currWord, endWord, path) {
      if (currWord === endWord) {
          result.push(Array.from(path));
          return;
      }
      let neighbors = allCombo.get(currWord);
      neighbors.forEach(neighbor => {
          if (distances.has(neighbor) && distances.get(neighbor) === distances.get(currWord) + 1) {
              path.push(neighbor);
              dfs(neighbor, endWord, path);
              path.pop();
          }
      });
  }
  dfs(beginWord, endWord, [beginWord]);
  return result;
};

function createAdjList(wordList) {
  let allCombo = new Map();
   wordList.forEach(word => {
      let adjWords = [];
      for (let i = 0; i < word.length; i++) {
          let regexp = new RegExp(`${word.slice(0, i)}\\w${word.slice(i + 1)}`);
          let neighbors = wordList.filter(w => w !== word && regexp.test(w));
          adjWords = adjWords.concat(neighbors);
      }
      allCombo.set(word, adjWords);
  });
  return allCombo;
}

function bfs(beginWord, endWord, allCombo) {
  let q = [beginWord];
  let distances = new Map();
  let level = 0;
  distances.set(beginWord, level);
  while (q.length > 0) {
      let size = q.length;
      for (let i = 0; i < size; i++) {
          let word = q.shift();
          if (word === endWord) return distances;
          let neighbors = allCombo.get(word);
          if (neighbors) {
              for (let i = 0; i < neighbors.length; i++) {
                  let currWord = neighbors[i];
                  if (!distances.has(currWord)) {
                      distances.set(currWord, level + 1);
                      q.push(currWord);
                  }
              }
          }
      }
      level += 1;
  }
}
