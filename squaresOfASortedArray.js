// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Solution 1 O(n) time | O(n) space

var sortedSquares = function(nums) {
  let ans = new Array(nums.length);
  let start = 0;
  let end = nums.length - 1;
  let i = end;
  while (start <= end) {
      let val1 = nums[start] * nums[start];
      let val2 = nums[end] * nums[end];
      if (val1 > val2) {
          ans[i] = val1;
          start++;
      } else {
          ans[i] = val2;
          end--;
      }
      i--;
  }
  return ans;
};
