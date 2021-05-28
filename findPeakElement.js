// 162. Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Solution 1 O(n) time | O(1) space

var findPeakElement = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};

// Solution 2 O(log(n)) time | O(1) space

var findPeakElement = function(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (mid === 0 && nums[mid] > nums[mid + 1]) return mid;
      else if (mid === nums.length - 1 && nums[mid] > nums[mid - 1]) return mid;
      else if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
      else if (nums[mid] > nums[mid + 1]) right = mid - 1;
      else left = mid + 1;
  }
  return -1;
};

// Solution 3 with cleaner binary search

var findPeakElement = function(nums) {
  if (nums.length === 0) return -1;
  let l = 0, r = nums.length - 1;
  while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if (nums[mid] < nums[mid + 1]) l = mid + 1;
      else r = mid;
  }
  return l;
};
