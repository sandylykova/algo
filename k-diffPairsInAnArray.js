// 532. K-diff Pairs in an Array

// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.

// Solution 1 O(n^2) time | O(1) space

var findPairs = function(nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let curr = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue;
          if (Math.abs(curr - nums[j]) === k) count++;
      }
  }
  return count;
};
