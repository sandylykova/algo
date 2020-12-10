// 73. Set Matrix Zeroes

// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Solution 1 O(n^2) time | O(n + m) - where n is the length of rows, m is the length of cols

var setZeroes = function(matrix) {
  let rows = new Array(matrix.length).fill(false);
  let cols = new Array(matrix[0].length).fill(false);
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
              rows[i] = true;
              cols[j] = true;
          }
      }
  }
  for (let i = 0; i < rows.length; i++) {
      if (rows[i]) {
          fillWithZeroesRow(matrix, i);
      }
  }
  for (let i = 0; i < cols.length; i++) {
      if (cols[i]) {
          fillWithZeroesCol(matrix, i);
      }
  }
  return matrix;
};

function fillWithZeroesRow(matrix, index) {
  for (let i = 0; i < matrix[0].length; i++) {
      matrix[index][i] = 0;
  }
}

function fillWithZeroesCol(matrix, index) {
  for (let i = 0; i < matrix.length; i++) {
      matrix[i][index] = 0;
  }
}
