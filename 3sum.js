// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Input: [-2,0,0,2,2]
// Output: [[-2,0,2]]

// Solution 1 with two pointers O(n^2) time | O()
var threeSum = function(nums) {
  let result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      let cur = nums[i];
      if (cur > 0) break;
      if (i > 0 && cur === nums[i - 1]) continue;
      twoSumII(i, nums, result);
  }
  return result;
};

const twoSumII = (i, nums, result) => {
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
          left++;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
          right--;
      } else {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
      }
  }
};
