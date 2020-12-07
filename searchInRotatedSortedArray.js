// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Solution 1 O(logn) time | O(1) space

var search = function(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      // left side is sorted
      if (nums[mid] >= nums[left]) {
          if (nums[left] <= target && nums[mid] > target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }

      // right side is sorted
      } else {
          if (target <= nums[right] && nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  return -1;
};
