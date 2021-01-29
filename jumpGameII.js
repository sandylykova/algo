// 45. Jump Game II

// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Solution 1 O(n) time | O(1) space

var jump = function(nums) {
  if (nums.length === 1) return 0;
  let jumps = 0;
  let steps = nums[0];
  let maxReach = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
      maxReach = Math.max(maxReach, nums[i] + i);
      steps--;
      if (steps === 0) {
          steps = maxReach - i;
          jumps++;
      }
  }
  return jumps + 1;
};

// Solution 2 O(n^2) time | O(n) space

var jump = function(nums) {
  let jumps = new Array(nums.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[j] >= i - j) jumps[i] = Math.min(jumps[j] + 1, jumps[i]);
      }
  }
  return jumps[jumps.length - 1];
};
