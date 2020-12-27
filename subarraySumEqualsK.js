// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Input: nums = [1,1,1], k = 2
// Output: 2

// Solution 1 O(n) time | O(n) space

var subarraySum = function(nums, k) {
  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      if (map.has(sum - k)) {
          count += map.get(sum - k);
      }
      map.set(sum, map.get(sum) + 1|| 1);
  }
  return count;
};

// Solution 2 O(n^2) time | O(1) space

var subarraySum = function(nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; start++) {
      let sum = 0;
      for (let end = start; end < nums.length; end++) {
          sum += nums[end];
          if (sum === k) count++;
      }
  }
  return count;
};
