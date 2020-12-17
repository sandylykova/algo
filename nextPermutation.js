// 31. Next Permutation

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

// Input: nums = [1,2,3]
// Output: [1,3,2]

// Solution 1 O(n) time | O(1) space

var nextPermutation = function(nums) {
  if (nums.length < 2) return nums;
  for (let i = nums.length - 2; i >= 0; i--) {
      if (nums[i] < nums[i + 1]) {
          let firstGreaterNumIdx = findFirstGreaterNum(i, nums);
          swap(i, firstGreaterNumIdx, nums);
          reverse(i + 1, nums);
          return;
      }
  }
  return nums.reverse();
};



function findFirstGreaterNum(index, nums) {
  for (let i = nums.length - 1; i > index; i--) {
      if (nums[i] > nums[index]) return i;
  }
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function reverse(i, nums) {
  let j = nums.length - 1;
  while (i < j) {
      swap(i, j, nums);
      i++;
      j--;
  }
}
