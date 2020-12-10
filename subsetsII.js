// 90. Subsets II
// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

// Solution 1

var subsetsWithDup = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  function backtrack(index, curr) {
      result.push(curr.slice());
      for (let i = index; i < nums.length; i++) {
          if (i !== index && nums[i] === nums[i - 1]) continue;
          curr.push(nums[i]);
          backtrack(i + 1, curr);
          curr.pop();
      }
  }
  backtrack(0, []);
  return result;
};
