// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums, return the minimum element of this array.

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

// Solution 1 O(logn) time | O(1) space

var findMin = function(nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) return nums[left];
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
      if (nums[mid] < nums[mid - 1]) return nums[mid];
      if (nums[mid] > nums[left]) left = mid + 1;
      else right = mid - 1;
  }
  return -1;
};
