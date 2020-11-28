// Write an efficient algorithm that searches for a value in an MxN matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// Example:

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]

// Solution 1 with binary search

var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length === 0) return false;
  function binarySearch(left, right, row, matrix, target) {
      let start = left;
      while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (row) {
              if (matrix[mid][start] < target) {
                  left = mid + 1;
              } else if (matrix[mid][start] > target) {
                  right = mid - 1;
              } else {
                  return true;
              }
          } else {
              if (matrix[start][mid] < target) {
                  left = mid + 1;
              } else if (matrix[start][mid] > target) {
                  right = mid - 1;
              } else {
                  return true;
              }
          }
      }
  }
  let shorterDim = Math.min(matrix.length, matrix[0].length);
  for(let i = 0; i < shorterDim; i++) {
      let columnFound = binarySearch(i, matrix[0].length - 1, false, matrix, target);
      let rowFound = binarySearch(i, matrix.length - 1, true, matrix, target);
      if (columnFound || rowFound) return true;
  }
  return false;
};

// Solution 2 O(n + m) time | O(1) space - where n is the length of the matrix's rows and m is the length of the matrix's columns

var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0) return false;
    let currRow = 0;
    let currCol = matrix[0].length - 1;
    while (currRow < matrix.length && currCol >= 0) {
        let currValue = matrix[currRow][currCol];
        if (currValue > target) {
            currCol--;
        } else if (currValue < target) {
            currRow++;
        } else {
            return true;
        }
    }
    return false;
};

// Solution 2.1 O(n + m) time | O(1) space - where n is the length of the matrix's rows and m is the length of the matrix's columns

function searchInSortedMatrix(matrix, target) {
    let startRow = 0;
    let startCol = matrix[0].length - 1;
    let currPositionVal;
    while (startRow < matrix.length && startCol >= 0) {
        currPositionVal = matrix[startRow][startCol];
        if (currPositionVal < target) {
            startRow++;
        } else if (currPositionVal > target) {
            startCol--;
        } else {
            return [startRow, startCol];
        }
    }
    return [-1, -1];
  }
