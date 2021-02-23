// 300. Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Solution 1 O(n) time | O(n) space

var lengthOfLIS = function(nums) {
  let max = 0;
  let n = nums.length;
  let dp = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      max = Math.max(dp[i], max);
  }
  return max;
};
