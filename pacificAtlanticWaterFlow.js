// 417. Pacific Atlantic Water Flow

// You are given an m x n integer matrix heights representing the height of each unit cell in a continent. The Pacific ocean touches the continent's left and top edges, and the Atlantic ocean touches the continent's right and bottom edges.

// Water can only flow in four directions: up, down, left, and right. Water flows from a cell to an adjacent one with an equal or lower height.

// Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// Solution 1 O(mn) time | O(mn) space

var pacificAtlantic = function(heights) {
  let m = heights.length;
  let n = heights[0].length;
  let pacificReachable = new Array(heights.length).fill(false).map(() => new Array(heights[0].length).fill(false));
  let atlanticReachable = new Array(heights.length).fill(false).map(() => new Array(heights[0].length).fill(false));
  for (let i = 0; i < n; i++) {
      dfs(0, i, heights, pacificReachable);
      dfs(m - 1, i, heights, atlanticReachable);
  }
  for (let i = 0; i < m; i++) {
      dfs(i, 0, heights, pacificReachable);
      dfs(i, n - 1, heights, atlanticReachable);
  }
  let result = [];
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (atlanticReachable[i][j] && pacificReachable[i][j]) {
              result.push([i, j]);
          }
      }
  }
  return result;
};

function dfs(row, col, heights, reachable) {
  let stack = [[row, col]];
  let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (stack.length > 0) {
      let [i, j] = stack.pop();
      if (i < 0 || j < 0 || i === heights.length || j === heights[0].length) continue;
      if (reachable[i][j]) continue;
      reachable[i][j] = true;
      for (let dir of dirs) {
          let i2 = i + dir[0];
          let j2 = j + dir[1];
          if (i2 < 0 || j2 < 0 || i2 === heights.length || j2 === heights[0].length) continue;
          if (heights[i2][j2] < heights[i][j]) continue;
          if (reachable[i2][j2]) continue;
          stack.push([i2, j2]);
      }
  }
}
