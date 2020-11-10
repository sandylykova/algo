// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

var exist = function(board, word) {
  let found = false;
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
          if (board[r][c] === word[0]) {
              check(r, c, 0);
              if (found) return true;
          }
      }
  }
  function check(i, j, index) {
      if (!found) {
          if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return;
          if (word[index] !== board[i][j]) return;
          if (index === word.length - 1) {
              found = true;
              return;
          }

          board[i][j] = null;
          check(i + 1, j, index + 1);
          check(i - 1, j, index + 1);
          check(i, j + 1, index + 1);
          check(i, j - 1, index + 1);
          board[i][j] = word[index];
      }
  }
  return false;
};
