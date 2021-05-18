// 494. Target Sum

// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3

// Solution 1 O(l*n) | O(n) space, where n is the size of the input array, l is the range of sum possible

var findTargetSumWays = function(nums, target) {
  let memo = {};
  if (nums.length === 0 || !nums) return 0;
  function traverse(current, idx) {
      let key = `${idx}#${current}`;
      if (idx === nums.length) {
          if ( current === target) return 1;
          return 0;
      }
      if (key in memo) {
          return memo[key];
      }
      let positiveSide = traverse(current + nums[idx], idx + 1);
      let negativeSide = traverse(current - nums[idx], idx + 1);
      let total = positiveSide + negativeSide;
      memo[key] = total;
      return total;
  }
  return traverse(0, 0);
};

// Solution 1 O(l*n) | O(l*n) space, where n is the size of the input array, l is the range of sum possible

var findTargetSumWays = function(nums, target) {
  let sum = 0;
  let zeroes = 0;
  for (let num of nums) {
      if (num === 0) zeroes++;
      sum += num;
  }
  if ((target + sum) % 2 === 1 || target > sum) {
      return 0;
  }
  let targetSum = (sum + target) / 2;
  let dp = new Array(nums.length + 1).fill(0).map(() => new Array(targetSum + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= nums.length; i++) {
      let num = nums[i - 1];
      for (let j = 0; j <= targetSum; j++) {
          if (j === 0) dp[i][j] = 1;
          else if (j < num || num === 0) {
              dp[i][j] = dp[i - 1][j];
          } else {
              dp[i][j] = dp[i - 1][j - num] + dp[i - 1][j];
          }
      }
  }
  return 2 ** zeroes * dp[nums.length][targetSum];
};
