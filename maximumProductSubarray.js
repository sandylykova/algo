// 152. Maximum Product Subarray

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Solution 1 O(n) time | O(1) space

var maxProduct = function(nums) {
  let max = nums[0];
  let currentMaxSoFar = nums[0];
  let currentMinSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let currentMax = currentMaxSoFar * nums[i];
      let currentMin = currentMinSoFar * nums[i];
      currentMaxSoFar = Math.max(nums[i], currentMax, currentMin);
      currentMinSoFar = Math.min(nums[i], currentMax, currentMin);
      max = Math.max(currentMaxSoFar, max, currentMinSoFar);
  }
  return max;
};
