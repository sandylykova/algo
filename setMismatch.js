// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Input: nums = [1,2,2,4]
// Output: [2,3]

// Solution 1 O(n) time | O(n) space

var findErrorNums = function(nums) {
  let n = nums.length;
  let sum = n * (n + 1) / 2;
  let set = new Set();
  let actualSum = 0;
  let duplicate;
  for (let num of nums) {
      actualSum += num;
      if (set.has(num)) duplicate = num;
      set.add(num);
  }
  let missedNum = sum - actualSum + duplicate;
  return [duplicate, missedNum];
};
