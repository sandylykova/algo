// 221. Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

// Solution 1 O(n*m) time | O(n*m) space

var maximalSquare = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let dp = new Array(rows + 1).fill(0).map(() => new Array(cols + 1).fill(0));
  let maxLen = 0;
  for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <=cols; j++) {
          if (matrix[i - 1][j - 1] === '1') {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
              maxLen = Math.max(maxLen, dp[i][j]);
          }
      }
  }
  return maxLen * maxLen;
};
