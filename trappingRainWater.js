// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Solution 1 brute force O(n^2) time | O(1) space

function trap(height) {
  if (height == null || height.length === 0) return 0;

  let res = 0;
  for (let i = 0; i < height.length; i++) {
    let lMax = 0;
    let rMax = 0;

    for (let j = 0; j < i; j++) {
      lMax = Math.max(lMax, height[j]);
    }
    for (let j = i + 1; j < height.length; j++) {
      rMax = Math.max(rMax, height[j]);
    }

    const water = Math.min(lMax, rMax) - height[i];
    if (water > 0) res += water;
  }

  return res;
}

// Solution 2 dymanic programming O(n) time | O(n) space

var trap = function(height) {
  let water = 0;
  let left = [height[0]];
  let len = height.length;
  let right = [];
  right[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
      left[i] = Math.max(height[i], left[i - 1]);
  }
  for (let i = len - 2; i >= 0; i--) {
      right[i] = Math.max(height[i], right[i + 1]);
  }
  for (let i = 0; i < len; i++) {
      water += Math.min(left[i], right[i]) - height[i];
  }
  return water;
};

// Solution 3 O(n) time | O(1) space

var trap = function(height) {
  if (!height || !height.length) return 0;
  let left = 0, leftMax = 0;
  let right = height.length - 1, rightMax = 0;
  let ans = 0;
  while (left < right) {
      if (height[left] < height[right]) {
          leftMax >= height[left] ? ans += leftMax - height[left] : leftMax = height[left];
          left++;
      } else {
          rightMax >= height[right] ? ans += rightMax - height[right] : rightMax = height[right];
          right--;
      }
  }
  return ans;
};
