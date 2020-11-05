// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

// Solution 1 brute force O(n^3) time | O(1) space

var largestRectangleArea = function(heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
      for (let j = i; j < heights.length; j++) {
          let min = Infinity;
          for (let k = i; k <= j; k++) {
              min = Math.min(min, heights[k]);
          }
          max = Math.max(max, min * (j - i + 1));
      }
  }
  return max;
};

// Solution 2 better brute force O(n^2) time | O(1) space

var largestRectangleArea = function(heights) {
  let max = 0;
  for (let i = 0; i < heights.length; i++) {
      let min = Infinity;
      for (let j = i; j < heights.length; j++) {
          min = Math.min(min, heights[j]);
          max = Math.max(max, min * (j - i + 1));
      }
  }
  return max;
};

// Solution 3 with stack

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
  return max;
};
