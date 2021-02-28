// 289. Game of Life

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// Solution 1 O(nm) time | O(nm) space

const gameOfLife = function(board) {
  let copy = board.map(row => row.map(val => val = val));
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 1) {
              let val = check(i, j, copy);
              if (val < 2) {
                  board[i][j] = 0;
              } else if (val > 3) {
                  board[i][j] = 0;
              }
          } else {
              let val = check(i, j, copy);
              if (val === 3) {
                  board[i][j] = 1;
              }
          }
      }
  }
  return board;
};

function check(i, j, board) {
  let counter = 0;
  if (i > 0 && j > 0) counter += board[i - 1][j - 1];
  if (i > 0) counter += board[i - 1][j];
  if (i > 0 && j < board[0].length - 1) counter += board[i - 1][j + 1];
  if (j < board[0].length - 1) counter += board[i][j + 1];
  if (i < board.length - 1 && j < board[0].length - 1) counter += board[i + 1][j + 1];
  if (i < board.length - 1) counter += board[i + 1][j];
  if (i < board.length - 1 && j > 0) counter += board[i + 1][j - 1];
  if (j > 0) counter += board[i][j - 1];
  return counter;
}
