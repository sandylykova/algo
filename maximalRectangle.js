// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6

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
