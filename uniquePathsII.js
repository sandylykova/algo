// 63. Unique Paths II

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right

// Solution 1 O(nm) time | O(nm) space

var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1] === 1) return 0;
  let dp = new Array(obstacleGrid.length).fill(0).map(() => new Array(obstacleGrid[0].length).fill(0));
  for (let i = 0; i < dp.length; i++) {
      for (let j = 0; j < dp[i].length; j++) {
          if (obstacleGrid[i][j] === 1) {
              continue;
          } else if (i === 0 && j === 0) {
              dp[i][j] = 1;
          } else if (i === 0) {
              let prevCol = obstacleGrid[i][j - 1];
              if (prevCol !== 1 && dp[i][j - 1] !== 0) dp[i][j] = 1;
          } else if (j === 0) {
              let prevRow = obstacleGrid[i - 1][j];
              if (prevRow !== 1 && dp[i - 1][j] !== 0) dp[i][j] = 1;
          } else {
              dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
          }
      }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
