// 416. Partition Equal Subset Sum

// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Solution 1 O(n*m) time | O(n*m) space, where n is the length of the input array, m is the target sum

var canPartition = function(nums) {
  let sum = 0;
  for (let num of nums) {
      sum += num;
  }
  if (sum % 2 !== 0) return false;
  let target = sum / 2;
  let dp = new Array(nums.length + 1).fill(false).map(() => new Array(target + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= nums.length; i++) {
      let currentNum = nums[i - 1];
      for (let j = 0; j <= target; j++) {
          if (j === 0) dp[i][j] = true;
          else if (currentNum > j) {
              dp[i][j] = dp[i - 1][j];
          } else {
              dp[i][j] = dp[i - 1][j - currentNum] || dp[i - 1][j];
          }
      }
  }
  return dp[nums.length][target];
};
