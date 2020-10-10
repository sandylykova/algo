// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1

// Solution 1 O(n) time | O(1) space

var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];
  let curMax = nums[0];
  for (let  i = 1; i < nums.length; i++) {
      if (curMax + nums[i] <= nums[i]) {
          curMax = nums[i];
      } else curMax = curMax + nums[i];
      if (curMax > maxSum) {
          maxSum = curMax;
      }
  }
  return maxSum;
};
