// 529. Minesweeper

// You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

// Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

// If a mine ('M') is revealed, then the game is over - change it to 'X'.
// If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
// If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
// Return the board when no more squares will be revealed.

// Input:

// [['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'M', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E'],
//  ['E', 'E', 'E', 'E', 'E']]

// Click : [3,0]

// Output:

// [['B', '1', 'E', '1', 'B'],
//  ['B', '1', 'M', '1', 'B'],
//  ['B', '1', '1', '1', 'B'],
//  ['B', 'B', 'B', 'B', 'B']]

// Solution 1

var updateBoard = function(board, click) {
  let x = click[0], y = click[1], m = board.length, n = board[0].length;
  if (board[x][y] === 'M') {
      board[x][y] = 'X';
  } else {
      let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [-1, 1], [1, 1], [1, -1]];
      dfs(board, x, y, m, n, dirs);
  }
  return board;
};

function dfs(board, x, y, m, n, dirs) {
  if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'E') return;
  let mine = countMine(board, x, y, m, n);
  if (mine > 0) {
      board[x][y] = mine.toString();
      return;
  } else {
      board[x][y] = 'B';
      for (let dir of dirs) {
          dfs(board, x + dir[0], y + dir[1], m, n, dirs);
      }
  }
}

function countMine(board, x, y, m, n) {
  let count = 0;
  for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
          if (0 <= i && i < m && 0 <= j && j < n && board[i][j] === 'M') {
              count++;
          }
      }
  }
  return count;
}
