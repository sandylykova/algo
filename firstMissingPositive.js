// Given an unsorted integer array nums, find the smallest missing positive integer.

// Follow up: Could you implement an algorithm that runs in O(n) time and uses constant extra space.?

// Input: nums = [1,2,0]
// Output: 3

// Solution 1 O(n) time | O(n) space

var firstMissingPositive = function(nums) {
  let set = new Set();
  let maxPossibleNumber = nums.length + 1;
  for (let num of nums) {
      set.add(num);
  }
  for (let i = 1; i <= maxPossibleNumber; i++) {
      if (!set.has(i)) return i;
  }
};

// Solution 2 O(n) time | O(1) space

var firstMissingPositive = function(nums) {
  let hasOne = false;
  let maxPossibleNumber = nums.length + 1;
  for (let num of nums) {
      if (num === 1) {
          hasOne = true;
          break;
      }
  }
  if (!hasOne) return 1;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums.length || nums[i] < 1) nums[i] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      if (curr < 0) curr = -curr;
      if (nums[curr - 1] > 0) nums[curr - 1] = -nums[curr - 1];
  }
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) return i + 1;
  }
  return maxPossibleNumber;
};
