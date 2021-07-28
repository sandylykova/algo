// 1277. Count Square Submatrices with All Ones

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Input: matrix =
// [
//   [0,1,1,1],
//   [1,1,1,1],
//   [0,1,1,1]
// ]
// Output: 15

// There are 10 squares of side 1.
// There are 4 squares of side 2.
// There is  1 square of side 3.
// Total number of squares = 10 + 4 + 1 = 15.

// Solution 1 O(nm) time | O(nm) space

var countSquares = function(matrix) {
  let copy = [];
  for (let i = 0; i < matrix.length; i++) {
      let row = [];
      for (let j = 0; j < matrix[i].length; j++) {
          row.push(matrix[i][j]);
      }
      copy.push(row);
  }
  let count = 0;
  for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j++) {
          if (matrix[i][j] === 1) {
              copy[i][j] = Math.min(copy[i - 1][j], copy[i][j - 1], copy[i - 1][j - 1]) + 1;
          }
      }
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          count += copy[i][j];
      }
  }
  return count;
};
