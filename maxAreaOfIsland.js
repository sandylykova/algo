// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]];

// Given the above grid, return 6.

// Solution 1
// Time & space complexity O(R*C), where R is the number of rows in the given grid, and C is the number of columns.

var maxAreaOfIsland = function(grid) {
  let maxIsland = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              maxIsland = Math.max(maxIsland, traverse(i, j, grid) );
          }
      }
  }
  return maxIsland;
};

function traverse(i, j, grid) {
  if (i < 0 || j < 0 || i >= grid.length || j >=grid[i].length) {
      return 0;
  }
  if (grid[i][j] === 0) return 0;
  grid[i][j] = 0;

  return 1 + traverse(i + 1, j, grid) + traverse(i - 1, j, grid) + traverse(i, j + 1, grid) + traverse(i, j - 1, grid);
}




