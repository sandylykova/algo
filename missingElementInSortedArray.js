// 1060. Missing Element in Sorted Array

// Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, return the kth missing number starting from the leftmost number of the array.

// Input: nums = [4,7,9,10], k = 1
// Output: 5
// Explanation: The first missing number is 5.

// Solution 1 O(n) time | O(n) space

var missingElement = function(nums, k) {
    let set  = new Set();
    for (let num of nums){
        set.add(num);
    }
    let found = 0;
    for (let i = 0;i < nums.length;i++){
        let next = nums[i] + 1;
            while (!set.has(next) && found < k){
                set.add(next);
                next++;
                found++;
            }
        if (found === k) return next - 1;
    }
};

// Solution 2 O(log(n)) time | O(1) space

function numberOfMissingElements(i, nums) {
  return nums[i] - nums[0] - i;
}

var missingElement = function(nums, k) {
  let len = nums.length;
  if (k > numberOfMissingElements(len - 1, nums)) return nums[len - 1] + k - numberOfMissingElements(len - 1, nums);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      let mid = Math.floor((right + left) / 2);
      if (numberOfMissingElements(mid, nums) < k) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return nums[left - 1] + k - numberOfMissingElements(left - 1, nums);
};
