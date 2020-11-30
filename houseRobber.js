// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.

// Solution 1 O(n) time | O(1) space

var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let twoHousesAhead = nums[0];
  let oneHouseAhead = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
      let currSum = Math.max(twoHousesAhead + nums[i], oneHouseAhead);
      twoHousesAhead = oneHouseAhead;
      oneHouseAhead = currSum;
  }
  return oneHouseAhead;
};
