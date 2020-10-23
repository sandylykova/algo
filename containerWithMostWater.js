// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Solution 1 brute force O(n^2) time | O(1) space

var maxArea = function(height) {
    let max = 0;
    let len = height.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let curMax = Math.min(height[i], height[j]) * (j - i);
            if (max < curMax) {
                max = curMax;
            }
        }
    }
    return max;
};

// Solution 2 with 2 poinetrs O(n) time | O(1) space

var maxArea = function(height) {
  let max = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  while (p1 < p2) {
      let curMax = Math.min(height[p1], height[p2]) * (p2 - p1);
      if (max < curMax) {
          max = curMax;
      }
      if (height[p1] < height[p2]) p1++;
      else p2--;

  }
  return max;
};
