// 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6

// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24

// Solution 1 O(n) time | O(1) space

var maximumProduct = function(nums) {
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity;
  for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (num > max1) {
          max3 = max2;
          max2 = max1;
          max1 = num;
      } else if (num > max2) {
          max3 = max2;
          max2 = num;
      } else if (num > max3) {
          max3 = num;
      }
      if (num < min1) {
          min2 = min1;
          min1 = num;
      } else if (num < min2) {
          min2 = num;
      }
  }
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
