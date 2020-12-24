// Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

// Given matrix = [
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]

// sumRegion(2, 1, 4, 3) -> 8
// sumRegion(1, 1, 2, 2) -> 11
// sumRegion(1, 2, 2, 4) -> 12

// Solution 1 O(1) time per query, O(m*n) time pre-computation | O(m*n) space

var NumMatrix = function(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return;
  this.dp = new Array(matrix.length + 1).fill(0).map(() => new Array(matrix[0].length + 1).fill(0));
  for (let r = 1; r <= matrix.length; r++) {
      for (let c = 1; c <= matrix[0].length; c++) {
          this.dp[r][c] = this.dp[r - 1][c] + this.dp[r][c - 1] + matrix[r - 1][c - 1] - this.dp[r - 1][c - 1];
      }
  }
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
};
