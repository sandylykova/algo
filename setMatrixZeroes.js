// 73. Set Matrix Zeroes

// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Solution 1 O(n^2) time | O(n + m) - where n is the number of rows, m is the number of cols

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

// Solution 2 O(n^2) time | O(1) space

var setZeroes = function(matrix) {
  let isCol = false;
  let rows = matrix.length;
  let cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) isCol = true;
      for (let j = 1; j < cols; j++) {
          if (matrix[i][j] === 0) {
              matrix[i][0] = 0;
              matrix[0][j] = 0;
          }
      }
  }
  for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
          if (matrix[0][j] === 0 || matrix[i][0] === 0) {
              matrix[i][j] = 0;
          }
      }
  }
  // See if the first row needs to be set to zero as well
  if (matrix[0][0] === 0) {
      for (let j = 0; j < cols; j++) {
          matrix[0][j] = 0;
      }
  }
  // See if the first column needs to be set to zero as well
  if (isCol) {
      for (let i = 0; i < rows; i++) {
          matrix[i][0] = 0;
      }
  }
};
