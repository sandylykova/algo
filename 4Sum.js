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

// Solution 2 (cleaner Solution 1) O(n^3) time | O(1) space

var fourSum = function(nums, target) {
  let values = [];
  if (!nums || nums.length < 4) return values;
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      for (let j = i + 1; j < len - 2; j++) {
          if (j > i + 1 && nums[j] === nums[j - 1]) continue;
          let sum1 = nums[i] + nums[j];
          let left = j + 1;
          let right = len - 1;
          while (left < right) {
              let sum2 = sum1 + nums[left] + nums[right];
              if (sum2 === target) {
                  values.push([nums[i], nums[j], nums[left], nums[right]]);
                  left++;
                  right--;
                  while (left < right && nums[left] === nums[left - 1]) left++;
                  while (left < right && nums[right] === nums[right + 1]) right--;
              } else if (sum2 > target) {
                  right--;
              } else {
                  left++;
              }
          }
      }
  }
  return values;
};
