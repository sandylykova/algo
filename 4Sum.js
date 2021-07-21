// 18. 4Sum

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Solution 1 O(n^3) time | O(1) space

var fourSum = function(nums, target) {
  if (nums.length === 0) return [];
  nums.sort((a, b) => a - b);
  let vals = [];
  for (let i = 0; i < nums.length - 3; i++) {
      for (let j = i + 1; j < nums.length - 2; j++) {
          let l = j + 1;
          let r = nums.length - 1;
          while (l < r) {
              let sum = nums[i] + nums[j] + nums[l] + nums[r];
              if (sum === target) {
                  vals.push([nums[i], nums[j], nums[l], nums[r]]);
                  while (nums[l] === nums[l + 1]) l++;
                  while (nums[r] === nums[r - 1]) r--;
                  l++;
                  r--;
              } else if (sum > target) r--;
              else l++;
          }
          while (nums[j] === nums[j + 1]) j++;
      }
      while (nums[i] === nums[i + 1]) i++;
  }
  return vals;
};
