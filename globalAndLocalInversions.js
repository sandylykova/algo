// 775. Global and Local Inversions

// You are given an integer array nums of length n which represents a permutation of all the integers in the range [0, n - 1].

// The number of global inversions is the number of the different pairs (i, j) where:

// 0 <= i < j < n
// nums[i] > nums[j]
// The number of local inversions is the number of indices i where:

// 0 <= i < n - 1
// nums[i] > nums[i + 1]
// Return true if the number of global inversions is equal to the number of local inversions.

// Input: nums = [1,0,2]
// Output: true
// Explanation: There is 1 global inversion and 1 local inversion.

// Solution 1 O(n) time | O(1) space

var isIdealPermutation = function(nums) {
  let max = -1;
  for (let i = 0; i < nums.length - 2; i++) {
      max = Math.max(max, nums[i]);
      if (max > nums[i + 2]) return false;
  }
  return true;
};
