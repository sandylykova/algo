// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16

// Input: grid = [[1,0]]
// Output: 4

// Solution 1 O(mn) where m is the number of rows of the grid and n is the number of columns of the grid) time | O(1) space

var islandPerimeter = function(grid) {
  let perimeter = 0;
  let up;
  let botton;
  let right;
  let left;
 for (let i = 0; i < grid.length; i++) {
     for (let j = 0; j < grid[i].length; j++) {
         if (grid[i][j] === 1) {
             if (i === 0) up = 0;
             else up = grid[i - 1][j];
             if (i === grid.length - 1) botton = 0;
             else botton = grid[i + 1][j];
             if (j === 0) left = 0;
             else left = grid[i ][j - 1];
             if (j === grid[i].length - 1) right = 0;
             else right = grid[i][j + 1];
             perimeter += 4 - (up + botton + left + right);
         }
     }
 }
 return perimeter;
};
