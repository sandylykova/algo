// 1499. Max Value of Equation

// Given an array points containing the coordinates of points on a 2D plane, sorted by the x-values, where points[i] = [xi, yi] such that xi < xj for all 1 <= i < j <= points.length. You are also given an integer k.

// Find the maximum value of the equation yi + yj + |xi - xj| where |xi - xj| <= k and 1 <= i < j <= points.length. It is guaranteed that there exists at least one pair of points that satisfy the constraint |xi - xj| <= k.

// Input: points = [[1,3],[2,0],[5,10],[6,-10]], k = 1
// Output: 4
// Explanation: The first two points satisfy the condition |xi - xj| <= 1 and if we calculate the equation we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the condition and give a value of 10 + -10 + |5 - 6| = 1.
// No other pairs satisfy the condition, so we return the max of 4 and 1.

// Solution 1 O(n) time | O(n) space

var findMaxValueOfEquation = function(points, k) {
  let q = [];
  let max = -Infinity;
  for (let i = 0; i < points.length; i++) {
      while (q.length && points[i][0] - q[0][1] > k) q.shift();
      if (q.length) max = Math.max(max, points[i][0] + points[i][1] + q[0][0]);
      while (q.length && points[i][1] - points[i][0] > q[q.length - 1][0]) q.pop();
      q.push([points[i][1] - points[i][0], points[i][0]]);
  }
  return max;
};
