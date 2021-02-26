// 64. Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

// Solution 1 O(nm) time | O(1) space

function minPathSum(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) grid[i][j] = grid[i][j];
      else if (i === 0) grid[i][j] = grid[i][j - 1] + grid[i][j];
      else if (j === 0) grid[i][j] = grid[i - 1][j] + grid[i][j];
      else {
        grid[i][j] = Math.min(grid[i - 1][j] + grid[i][j], grid[i][j - 1] + grid[i][j]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}
