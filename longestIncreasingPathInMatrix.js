// 329. Longest Increasing Path in a Matrix

// Given an integer matrix, find the length of the longest increasing path.

// From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

// Input: nums =
// [
//   [9,9,4],
//   [6,6,8],
//   [2,1,1]
// ]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Solution 1 O(n*m) time | O(n*m) space

var longestIncreasingPath = function(matrix) {
  if (!matrix || matrix.length === 0) return 0;
  let max = 0;
  let memo = new Array(matrix.length).fill(-1).map(row => new Array(matrix[0].length).fill(-1));
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          let currMax = traverse(matrix, i, j, -Infinity, memo);
          max = Math.max(max, currMax);
      }
  }
  return max;
};

function traverse(matrix, i, j, parent, memo) {
  if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length || matrix[i][j] <= parent) {
      return 0;
  }
  if (memo[i][j] === -1) {
      const   rowVector = [1, -1, 0, 0],
              colVector = [0, 0, 1, -1];
      let maxPath = 0;
      for(let dir = 0; dir < 4; dir++) {
    const maxForNode = 1 + traverse(matrix, i + rowVector[dir], j + colVector[dir], matrix[i][j], memo);
          maxPath = Math.max(maxPath, maxForNode);
      }
      memo[i][j] = maxPath;
  }
  return memo[i][j];
}
