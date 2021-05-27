// 80. Remove Duplicates from Sorted Array II

// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3]

// Solution 1 O(n) time | O(1) space

var removeDuplicates = function(nums) {
  let i = 0;
  for (let n of nums) {
      if (i < 2 || n > nums[i - 2]) nums[i++] = n;
  }
  nums = nums.slice(0, i);
  return nums.length;
};
