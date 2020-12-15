// 162. Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Solution 1 O(n) time | O(1) space

var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};
