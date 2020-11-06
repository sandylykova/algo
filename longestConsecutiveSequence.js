// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// Follow up: Could you implement the O(n) solution?

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Solution 1 O(nlog(n)) time | O(1) space

var longestConsecutive = function(nums) {
  if (nums.length == 0) {
      return 0;
  }
  nums.sort((a, b) => a - b);
  let count = 0;
  let i = 1;
  let curCount = 1;
  while (i < nums.length) {
      if (nums[i] != nums[i - 1]) {
          if (nums[i] === nums[i - 1] + 1) {
              curCount++;
          } else {
              count = Math.max(count, curCount);
              curCount = 1;
          }
      }
      i++;
  }
  return Math.max(count, curCount);
};

// Solution 2 O(n) time | O(n) space

var longestConsecutive = function(nums) {
  if (nums.length == 0) {
      return 0;
  }
  let set = new Set();
  for (let num of nums) {
      set.add(num);
  }
  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
      let potentialLongest = 1;
      let curNum = nums[i];
      if (set.has(nums[i] - 1)) continue;
      else {
          while (set.has(curNum + 1)) {
              curNum += 1;
              potentialLongest++;
          }
      }
      longest = Math.max(longest, potentialLongest);
  }
  return longest;
};
