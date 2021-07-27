// 229. Majority Element II

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Solution 1 O(n) time | O(1) space

var majorityElement = function(nums) {
  let result = [];
  if (!nums || !nums.length) return result;
  let len = nums.length;
  let num1 = null, count1 = 0;
  let num2 = null, count2 = 0;
  for (let num of nums) {
      if (num === num1) count1++;
      else if (num === num2) count2++;
      else if (count1 === 0) {
          num1 = num;
          count1 = 1;
      }
      else if (count2 === 0) {
          num2 = num;
          count2 = 1;
      } else {
          count1--;
          count2--;
      }
  }
  count1 = 0, count2 = 0;
  for (let num of nums) {
      if (num === num1) count1++;
      if (num === num2) count2++;
  }
  if (count1 > len / 3) result.push(num1);
  if (count2 > len / 3) result.push(num2);
  return result;
};
