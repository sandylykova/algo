// AlgoExpert: Number Of Ways To Traverse Graph
// Difficulty: medium

// Solution O(n * m) time | O(n * m) space, where n is the height of the grid and m is the width of the grid

function numberOfWaysToTraverseGraph(width, height) {
	let grid = new Array(height).fill(1).map(() => new Array(width).fill(1));
  for (let i = 1; i < height; i++) {
		for (let j = 1; j < width; j++) {
			grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
		}
	}
  return grid[height - 1][width - 1];
}
