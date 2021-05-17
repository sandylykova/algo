// 52. N-Queens II

// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

// Input: n = 4
// Output: 2

var totalNQueens = function(n) {
  let diag1 = new Set();
  let diag2 = new Set();
  let cols = new Set();
  let queensCounter = 0;
  totalQueensHelper(0);
  function totalQueensHelper(row) {
      if (row === n) {
          queensCounter++;
          return;
      }
      for (let col = 0; col < n; col++) {
          if (diag1.has(row - col) || diag2.has(row + col) || cols.has(col)) continue;
          diag1.add(row - col);
          diag2.add(row + col);
          cols.add(col);
          totalQueensHelper(row + 1);
          diag1.delete(row - col);
          diag2.delete(row + col);
          cols.delete(col);
      }
  }
  return queensCounter;
};
