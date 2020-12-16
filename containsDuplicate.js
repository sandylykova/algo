// 219. Contains Duplicate II

// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Solution O(n*k) | O(1) space

var containsNearbyDuplicate = function(nums, k) {
  if (nums.length < 2) return false;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j <= i + k; j++) {
          if (nums[i] === nums[j]) return true;
      }
  }
  return false;
};

// Solution 2 
