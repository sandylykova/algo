// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Solution 1 dynamic programming O(n * m) time | O(n * m) space

var uniquePaths = function(m, n) {
  let paths = [];
  for (let i = 0; i < m; i++) {
      paths[i] = [];
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (i === 0 || j === 0) {
              paths[i][j] = 1;
          } else {
              paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
          }
      }
  }
  return paths[m - 1][n - 1];
};
