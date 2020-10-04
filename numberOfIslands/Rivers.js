// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

var numIslands = function(grid) {
  let numberOfIslandes = [];
  let visited = grid.map(row => row.map(value => value = false));
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (visited[i][j]) continue;
          let island = traverseGrid(i, j, grid, visited);
          if (island > 0) numberOfIslandes.push(island);
      }
  }
  return numberOfIslandes.length;
};

const traverseGrid = (i, j, grid, visited) => {
  let nodesToExplore = [[i, j]];
  let islands = 0;
  while (nodesToExplore.length) {
      let currentNode = nodesToExplore.pop();
      i = currentNode[0];
      j = currentNode[1];
      if (visited[i][j]) continue;
      visited[i][j] = true;
      if (grid[i][j] === '0') continue;
      islands++;
      let neighbors = getNeighbors(i, j, visited, grid);
      for (const neighbor of neighbors) {
          nodesToExplore.push(neighbor);
      }
  }
  return islands;
};

const getNeighbors = (i, j, visited, grid) => {
  let neighbors = [];
  if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j]);
  if (i < grid.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1]);
  if (j < grid[i].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1]);
  return neighbors;
};
