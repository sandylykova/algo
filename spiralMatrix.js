// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Solution 1

var spiralOrder = function(matrix) {
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let result = [];
  while (startRow <= endRow && startCol <= endCol) {
      for (let col = startCol; col <= endCol; col++) {
          result.push(matrix[startRow][col]);
      }
      for (let row = startRow + 1; row <= endRow; row++) {
          result.push(matrix[row][endCol]);
      }
      if (startRow < endRow && startCol < endCol) {
          for (let bottomCol = endCol - 1; bottomCol >= startRow; bottomCol--) {
              result.push(matrix[endRow][bottomCol]);
          }
          for (let bottomRow = endRow - 1; bottomRow > startRow; bottomRow--) {
              result.push(matrix[bottomRow][startCol]);
          }
      }
      startCol++;
      startRow++;
      endRow--;
      endCol--;
  }
  return result;
};
