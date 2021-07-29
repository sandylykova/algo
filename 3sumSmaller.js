// Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

// Input: nums = [-2,0,1,3], target = 2
// Output: 2
// Explanation: Because there are two triplets which sums are less than 2:
// [-2,0,1]
// [-2,0,3]

// Solution 1 brute force O(n^3) time | O(1) space

var threeSumSmaller = function(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              if (nums[i] + nums[j] + nums[k] < target) count++;
          }
      }
  }
  return count;
};

// Solution 2 with two pointers O(n^2) time | O(1) space

var threeSumSmaller = function(nums, target) {
  let count = 0;
  if (nums.length < 3) return count;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      count += twoSumSmaller(i, target - nums[i], nums);
  }
  return count;
};

const twoSumSmaller = (i, target, nums) => {
  let count = 0;
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum < target) {
          count += right - left;
          left++;
      } else {
         right--;
      }
  }
  return count;
};

// Solution 2 O(n^2) time | O(1) space

var threeSumSmaller = function(nums, target) {
  let count = 0;
  if (nums.length < 3) return count;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          if (nums[i] + nums[left] + nums[right] < target) {
              count += right - left;
              left++;
          } else {
              right--;
          }
      }
  }
  return count;
};
