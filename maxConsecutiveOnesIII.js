// 1004. Max Consecutive Ones III

// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]

// Solution 1 O(n) time | O(1) space

var longestOnes = function(nums, k) {
  if (!nums || !nums.length) return 0;
  let left = 0;
  let right = 0;
  let zeroes = 0;
  let max = 0;
  while (right < nums.length) {
      if (nums[right] === 0) zeroes++;
      right++;
      while (left < right && zeroes > k) {
          if (nums[left] === 0) zeroes--;
          left++;
      }
      max = Math.max(max, right - left);
  }
  return max;
};
