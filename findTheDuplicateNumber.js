// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// Input: nums = [1,3,4,2,2]
// Output: 2

// Solution 1 O(n) time | O(n) space

var findDuplicate = function(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) return num;
        set.add(num);
    }
    return -1;
};

// Solution 2 O(n) time | O(1) space

var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
      slow = nums[slow];
      fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
  }
  return slow;
};
