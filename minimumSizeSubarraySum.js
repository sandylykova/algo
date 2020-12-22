// 209. Minimum Size Subarray Sum

// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

// Solution 1 O(n) time | O(1) space

var minSubArrayLen = function(s, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let min = Infinity;
  while (right < nums.length) {
      sum += nums[right];
      while (left <= right && sum >= s) {
          min = Math.min(min, right - left + 1);
          sum -= nums[left];
          left++;
      }
      right++;
    }
  return min === Infinity ? 0 : min;
};
