// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3

// Solution 1 O(n) time | O(1) space

var findMaxConsecutiveOnes = function(nums) {
  let counter = 0, i = 0;
  let max = 0;
  while (i < nums.length) {
      if (nums[i] === 1) counter++;
      else {
          counter = 0;
      }
      max = Math.max(max, counter);
      i++;
  }
  return max;
};
