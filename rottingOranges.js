// 994. Rotting Oranges

// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// Input: [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Input: [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

// Solution 1

var orangesRotting = function(grid) {
  let rottenOranges = [];
  let freshOranges = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 2)  {
              rottenOranges.push([i, j]);
          }
          if (grid[i][j] === 1) {
              freshOranges += 1;
          }
      }
  }
  let minutes = 0;
  let coordsR = [0, -1, 0, 1];
  let coordsC = [-1, 0, 1, 0];
  while (freshOranges > 0 && rottenOranges.length > 0) {
      let size = rottenOranges.length;
      while (size > 0) {
          let orange = rottenOranges.shift();
          size--;
          for (let i = 0; i < 4; i++) {
              let currX = orange[0] + coordsR[i];
              let currY = orange[1] + coordsC[i];
              if (!isNotValid(currX, currY, grid)) {
                  if (grid[currX][currY] === 1) {
                      grid[currX][currY] = 2;
                      freshOranges -= 1;
                      rottenOranges.push([currX, currY]);
                  }
              }
          }

      }
      minutes++;
  }
  return freshOranges === 0 ? minutes : -1;
};

function isNotValid(i, j, grid) {
  return i < 0 || i >= grid.length || j < 0 || j >= grid[0].length;
}
