// 1254. Number of Closed Islands

// Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

// Return the number of closed islands.

// Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// Output: 2
// Explanation:
// Islands in gray are closed because they are completely surrounded by water (group of 1s).

// Solution 1 O(nm) time | O(nm) space

var closedIsland = function(grid) {
  let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 0) {
              if (!visited[i][j]) {
                  let isBorder = traverse(i, j, grid, visited);
                  if (!isBorder) count++;
              }
          }
      }
  }
  return count;
};

function traverse(i, j, grid, visited) {
  let nodes = [[i, j]];
  let found = false;
  while (nodes.length > 0) {
      let [row, col] = nodes.pop();
      visited[row][col] = true;
      if (row === 0 || col === 0 || row === grid.length - 1 || col === grid[0].length - 1) {
          found = true;
      }
      let neighbors = getNeighbors(row, col, grid, visited);
      for (let neighbor of neighbors) {
          nodes.push(neighbor);
      }
  }
  return found;
}

function getNeighbors(i, j, grid, visited) {
  let vals = [];
  if (i > 0 && !visited[i - 1][j] && grid[i - 1][j] === 0) vals.push([i - 1, j]);
  if (j > 0 && !visited[i][j - 1] && grid[i][j - 1] === 0) vals.push([i, j - 1]);
  if (i < grid.length - 1 && !visited[i + 1][j] && grid[i + 1][j] === 0) vals.push([i + 1, j]);
  if (j < grid[0].length - 1 && !visited[i][j + 1] && grid[i][j + 1] === 0) vals.push([i, j + 1]);
  return vals;
}
