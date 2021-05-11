// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Solution 1 O(log(n)) time | O(1) space

var searchRange = function(nums, target) {
  let result = [];
  result[0] = findLeft(nums, target);
  result[1] = findRight(nums, target);
  return result;
};

function findLeft(nums, target) {
  let l = 0, r = nums.length - 1;
  let index = -1;
  while (l <= r) {
      let m = Math.floor((l + (r - l) / 2));
      if (nums[m] === target) index = m;
      if (nums[m] >= target) {
          r = m - 1;
      } else {
          l = m + 1;
      }
  }
  return index;
}

function findRight(nums, target) {
  let l = 0, r = nums.length - 1;
  let index = -1;
  while (l <= r) {
      let m = Math.floor((l + (r - l) / 2));
      if (nums[m] === target) index = m;
      if (nums[m] <= target) {
          l = m + 1;
      } else {
          r = m - 1;
      }
  }
  return index;
}
