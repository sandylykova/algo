// 361. Bomb Enemy

// Given an m x n matrix grid where each cell is either a wall 'W', an enemy 'E' or empty '0', return the maximum enemies you can kill using one bomb. You can only place the bomb in an empty cell.

// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since it is too strong to be destroyed.

// Input: grid = [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
// Output: 3

// Solution 1 O(mn*(m+n)) time | O(1) space

var maxKilledEnemies = function(grid) {
  let max = 0;
  if (!grid || grid.length === 0) return max;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === '0') {
              let numberOfEnemies = check(i, j, grid);
              max = Math.max(max, numberOfEnemies);
          }
      }
  }
  return max;
};

function check(row, col, grid) {
  let counter = 0;
  let i = row;
  let j = col;
  while (i < grid.length && grid[i][j] !== 'W') {
      if (grid[i][j] === 'E') counter++;
      i++;
  }
  i = row;
  while (i >= 0 && grid[i][j] !== 'W') {
      if (grid[i][j] === 'E') counter++;
      i--;
  }
  i = row;
  while (j < grid[0].length && grid[i][j] !== 'W') {
      if (grid[i][j] === 'E') counter++;
      j++;
  }
  j = col;
   while (j >= 0 && grid[i][j] !== 'W') {
      if (grid[i][j] === 'E') counter++;
      j--;
  }
  return counter;
}
