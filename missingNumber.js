// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Solution 1 O(n) time | O(n) space

var missingNumber = function(nums) {
  let range = nums.length;
  let set = new Set();
  for (let num of nums) {
      set.add(num);
  }
  for (let i = 0; i <= range; i++) {
      if (!set.has(i)) return i;
  }
  return -1;
};

// Solution 2 O(n) time | O(1) space

var missingNumber = function(nums) {
  let expectedSum = nums.length * (nums.length + 1) / 2;
  let actualSum = 0;
  for (let num of nums) {
      actualSum += num;
  }
  return expectedSum - actualSum;
};
