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
