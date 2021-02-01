// 212. Word Search II

// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Solution 1

var findWords = function(board, words) {
  let result = [];
  for (let word of words) {
      check(word);
  }
  function check(word) {
      let found = false;
      for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
              if (word[0] === board[i][j]) {
                  traverse(word, 0, i, j);
              }
          }
      }
      function traverse(word, index, i, j) {
          if (!found) {
              if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return;
              if (word[index] !== board[i][j]) return;
              if (index === word.length - 1) {
                  found = true;
                  result.push(word);
                  return;
              }
              board[i][j] = null;
              traverse(word, index + 1, i - 1, j);
              traverse(word, index + 1, i, j + 1);
              traverse(word, index + 1, i + 1, j);
              traverse(word, index + 1, i, j - 1);
              board[i][j] = word[index];
          }
      }
  }
  return result;
};
