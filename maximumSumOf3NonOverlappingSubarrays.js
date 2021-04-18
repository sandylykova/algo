// 689. Maximum Sum of 3 Non-Overlapping Subarrays

// In a given array nums of positive integers, find three non-overlapping subarrays with maximum sum.

// Each subarray will be of size k, and we want to maximize the sum of all 3*k entries.

// Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

// Example:

// Input: [1,2,1,2,6,7,5,1], 2
// Output: [0, 3, 5]
// Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
// We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

// Solution 1 O(n) time | O(n)space

var maxSumOfThreeSubarrays = function(nums, k) {
  let kWindowSums = new Array(nums.length - k + 1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (i >= k) {
          sum -= nums[i - k];
      }
      if (i >= k - 1) {
          kWindowSums[i - k + 1] = sum;
      }
  }
  let best = 0;
  let left = [];
  for (let i = 0; i < kWindowSums.length; i++) {
      if (kWindowSums[i] > kWindowSums[best]) best = i;
      left[i] = best;
  }
  let right = [];
  best = kWindowSums.length - 1;
  for (let i = kWindowSums.length - 1; i >= 0; i--) {
      if (kWindowSums[i] >= kWindowSums[best]) best = i;
      right[i] = best;
  }
  let ans = [-1, -1, -1];
  for (let j = k; j < kWindowSums.length - k; j++) {
      let i = left[j - k], l = right[j + k];
      if (ans[0] === -1 || kWindowSums[i] + kWindowSums[j] + kWindowSums[l] > kWindowSums[ans[0]] + kWindowSums[ans[1]] + kWindowSums[ans[2]]) {
          ans[0] = i;
          ans[1] = j;
          ans[2] = l;
      }
  }
  return ans;
};
