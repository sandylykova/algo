// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Solution 1 O(n) time | O(1) space

var searchInsert = function(nums, target) {
  let i;
  for (i = 0; i < nums.length; i++) {
      if (nums[i] >= target) return i;
  }

  return i;
};

// Solution 2 O(log(n)) time | O(1) space

var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
  }
  return left;
};
