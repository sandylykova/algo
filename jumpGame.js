// 55. Jump Game

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Solution 1 O(n^2) time | O(n) space

var canJump = function(nums) {
  let jumps = new Array(nums.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[j] >= i - j) jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
  }
  return jumps[jumps.length - 1] === Infinity ? false : true;
};


// Solution 2 O(n) time | O(1) space

var canJump = function(nums) {
  let lastValidIdx = nums.length - 1;
  for (let i = lastValidIdx - 1; i >= 0; i--) {
      if (nums[i] + i >= lastValidIdx) {
          lastValidIdx = i;
      }
  }
  return lastValidIdx === 0;
};
