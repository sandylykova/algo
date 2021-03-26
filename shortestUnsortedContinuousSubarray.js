// 581. Shortest Unsorted Continuous Subarray

// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

// Solution 1 O(n) time | O(1) space

var findUnsortedSubarray = function(nums) {
  if (nums.length <= 1) return 0;
  let leftSide = Infinity, rightSide = -Infinity;
  for (let i = 0; i < nums.length; i++) {
      if (!isOut(i, nums)) {
          leftSide = Math.min(nums[i], leftSide);
      }
  }
  for (let i = nums.length - 1; i>= 0; i--) {
      if (!isOut(i, nums)) {
          rightSide = Math.max(nums[i], rightSide);
      }
  }
  let l, r;
  for (l = 0; l < nums.length; l++) {
      if (leftSide < nums[l]) break;
  }
  for (r = nums.length - 1; r >= 0; r--) {
      if (rightSide > nums[r]) break;
  }
  return r - l < 0 ? 0 : r - l + 1;
};

function isOut(i, arr) {
  if (i === 0) return arr[i] <= arr[i + 1];
  else if (i === arr.length - 1) return arr[i] >= arr[i - 1];
  else {
      return arr[i] <= arr[i + 1] && arr[i] >= arr[i - 1];
  }
}
