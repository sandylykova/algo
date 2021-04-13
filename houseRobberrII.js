// 213. House Robber II

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Solution 1 O(n) time | O(n) space

var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  let dpWithFirstHouse = new Array(nums.length).fill(0);
  let dpWithoutFirstHouse = new Array(nums.length).fill(0);
  dpWithFirstHouse[1] = nums[0];
  dpWithoutFirstHouse[1] = nums[1];
  for (let i = 2; i < nums.length; i++) {
      dpWithFirstHouse[i] = Math.max(dpWithFirstHouse[i - 2] + nums[i - 1], dpWithFirstHouse[i - 1]);
  }
  for (let i = 2; i < nums.length; i++) {
      dpWithoutFirstHouse[i] = Math.max(dpWithoutFirstHouse[i - 2] + nums[i], dpWithoutFirstHouse[i - 1]);
  }
  return Math.max(dpWithFirstHouse[nums.length - 1], dpWithoutFirstHouse[nums.length - 1]);
};
