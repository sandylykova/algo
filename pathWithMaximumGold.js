// 1219. Path with Maximum Gold

// In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position you can walk one step to the left, right, up or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// Solution 1 O(4*3^k) time, where k is the number of cells with gold | O(k) space

var getMaximumGold = function(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] !== 0) {
              max = Math.max(max, dfs(i, j, grid));
          }
      }
  }
  return max;
};

function dfs(i, j, grid) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) return 0;
  let val = grid[i][j];
  grid[i][j] = 0;
  let result = val + Math.max(dfs(i - 1, j, grid), dfs(i + 1, j, grid),dfs(i, j - 1, grid),dfs(i, j + 1, grid));
  grid[i][j] = val;
  return result;
}

// Solution 2 O(4*3^k) time, where k is the number of cells with gold | O(k) space

var getMaximumGold = function(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] !== 0) {
              max = Math.max(max, dfs(i, j, grid));
          }
      }
  }
  return max;
};

function dfs(i, j, grid) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) return 0;
  let val = grid[i][j];
  grid[i][j] = 0;
  let x = [1, -1, 0, 0], y = [0, 0, 1, -1];
  let result = 0;
  for (let k = 0; k < 4; k++) {
      result = Math.max(result, dfs(i + x[k], j + y[k], grid));
  }
  grid[i][j] = val;
  return result + val;
}
