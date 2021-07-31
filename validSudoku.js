// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Solution 1

var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] !== '.') {
              let validRow = isValidRow(i, j, board[i][j], board);
              let validCol = isValidCol(i, j, board[i][j], board);
              let validSubbox = isValidSubbox(i, j, board[i][j], board);
              if (!validRow || !validCol || !validSubbox) return false;
          }
      }
  }
  return true;
};

function isValidRow(row, col, target, board) {
  for (let i = 0; i < 9; i++) {
      if (i === col) continue;
      if (board[row][i] === target) return false;
  }
  return true;
}

function isValidCol(row, col, target, board) {
  for (let i = 0; i < 9; i++) {
      if (i === row) continue;
      if (board[i][col] === target) return false;
  }
  return true;
}

function isValidSubbox(row, col, target, board) {
  let startRow = Math.floor(row / 3);
  let startCol = Math.floor(col / 3);

  if (startRow === 0) startRow = 0;
  else if (startRow === 1) startRow = 3;
  else startRow = 6;

  if (startCol === 0) startCol = 0;
  else if (startCol === 1) startCol = 3;
  else startCol = 6;

  for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
          if (i === row && j === col) continue;
          if (board[i][j] === target) return false;
      }
  }
  return true;
}
