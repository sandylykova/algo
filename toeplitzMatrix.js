// 766. Toeplitz Matrix

// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

// Solution 1 O(n^2) time | O(1) space

var isToeplitzMatrix = function(matrix) {
  for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j++) {
          if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
      }
  }
  return true;
};
