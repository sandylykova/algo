// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6

// Complexity Analysis

// Time complexity : O(NM). Running leetcode84 on each row takes M (length of each row) time. This is done N times for O(NM).

// Space complexity : O(M). We allocate an array the size of the the number of columns to store our widths at each row.

var largestRectangleArea = function(heights) {
  heights.push(0);
  let  max = 0;
  let start;
  let stack = [[0, heights[0]]];
  for (let i = 1; i < heights.length; i++) {
      start = i;
      while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
          let [index, value] = stack.pop();
          max = Math.max(max, value * (i - index));
          start = index;
      }
      stack.push([start, heights[i]]);
  }
  heights.pop();
  return max;
};

var maximalRectangle = function(matrix) {
  if (matrix.length == 0) return 0;
  let max = 0;
  let histogram = [];
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (histogram[j]) {
              histogram[j] = matrix[i][j] === '1' ? histogram[j] + 1 : 0;
          } else {
              histogram[j] = matrix[i][j] === '1' ? 1 : 0;
          }
      }
      max = Math.max(max, largestRectangleArea(histogram));
  }
  return max;
};


// Solution 2 O(nm) time | O(m) space

var maximalRectangle = function(matrix) {
    let max = 0;
    let histogram = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0) {
                histogram[j] = matrix[i][j] === '1' ? 1 : 0;
            } else {
                if (matrix[i][j] === '1') histogram[j] += 1;
                else histogram[j] = 0;
            }
        }
        max = Math.max(max, findMaxRectangle(histogram));
    }
    return max;
};

function findMaxRectangle(arr) {
    let max = 0;
    let leftSideLimit = [];
    let rightSideLimit = [];
    let s = [];
    for (let i = 0; i < arr.length; i++) {
        if (s.length === 0) {
            s.push(i);
            leftSideLimit[i] = 0;
        } else {
            while (s.length && arr[s[s.length - 1]] >= arr[i]) {
                s.pop();
            }
            if (s.length === 0) leftSideLimit.push(0);
            else leftSideLimit.push(s[s.length - 1] + 1);
            s.push(i);
        }
    }
    s = [];
    let rightLimit = arr.length - 1;
    for (let i = rightLimit; i >= 0; i--) {
        if (s.length === 0) {
            s.push(i);
            rightSideLimit[i] = rightLimit;
        } else {
            while (s.length && arr[s[s.length - 1]] >= arr[i]) {
                s.pop();
            }
            if (s.length === 0) rightSideLimit[i] = rightLimit;
            else rightSideLimit[i] = s[s.length - 1] - 1;
            s.push(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, (rightSideLimit[i] - leftSideLimit[i] + 1) * arr[i]);
    }
    return max;
}
