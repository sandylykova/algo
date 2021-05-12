// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Solution O(n) time | O(1) space

var sortColors = function(nums) {
  let numOfZeros = 0;
  let numOfOnes = 0;
  let numOfTwos = 0;
  for (let num of nums) {
      if (num === 0) numOfZeros++;
      else if (num === 1) numOfOnes++;
      else numOfTwos++;
  }
  let idx = 0;
  while (numOfZeros > 0) {
      nums[idx] = 0;
      idx++;
      numOfZeros--;
  }
  while (numOfOnes > 0) {
      nums[idx] = 1;
      idx++;
      numOfOnes--;
  }
  while (numOfTwos > 0) {
      nums[idx] = 2;
      idx++;
      numOfTwos--;
  }
  return nums;
};
