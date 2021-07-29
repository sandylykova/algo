// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// Solution 1 with backtrack

var subsets = function(nums) {
  let result = [[]];
  function backtrack(index, curr) {
      for (let i = index; i < nums.length; i++) {
          curr.push(nums[i]);
          result.push(curr.slice());
          backtrack(i + 1, curr);
          curr.pop();
      }

  }
  backtrack(0, []);
  return result;
};

// Solution 2 iterative O(2^n * n) time | O(2^n * n) space

var subsets = function(nums) {
  let result = [[]];
  for (let num of nums) {
      let len = result.length;
      for (let i = 0; i < len; i++) {
          let currentSubset = result[i];
          result.push(currentSubset.concat(num));
      }
  }
  return result;
};
