// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Solution 1 - naive
// O(n) time | O(n) space

var moveZeroes1 = function(nums) {
    let numOfZeros = 0;
    for (num of nums) {
        if (num === 0) numOfZeros++;
    }
    let numsWithoutZero = nums.filter(num => num !== 0);
    while (numOfZeros > 0) {
        numsWithoutZero.push(0);
        numOfZeros--;
    }
    return numsWithoutZero;
};

// Solution 2 using two pointers
// O(n) time | O(1) space
var moveZeroes2 = function(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== 0) {
          let temp = nums[fast];
          nums[fast] = nums[slow];
          nums[slow] = temp;
          slow++;
      }
  }
  return nums;
};
