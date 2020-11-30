// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

// Solution O(n) time | O(1) space

var findDisappearedNumbers = function(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
      let curr = Math.abs(nums[i]) - 1;
      if (nums[curr] > 0) nums[curr] = -nums[curr];
  }
  for (let i = 1; i <= nums.length; i++) {
      if (nums[i - 1] > 0) ans.push(i);
  }
  return ans;
};
