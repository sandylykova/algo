// 456. 132 Pattern

// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

// Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.

// Solution 1 O(n) time | O(n) space with stack

var find132pattern = function(nums) {
  let min = [];
  min[0] = nums[0];
  let stack = [];
  for (let i = 1; i < nums.length; i++) {
      min[i] = Math.min(min[i - 1], nums[i]);
  }
  for (let i = nums.length - 1; i >= 0; i--) {
      while (stack.length && stack[stack.length - 1] < nums[i]) {
          if (stack[stack.length - 1] > min[i]) return true;
          stack.pop();
      }
      stack.push(nums[i]);
  }
  return false;
};
