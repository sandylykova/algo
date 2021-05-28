// You are given an integer array nums sorted in ascending order, and an integer target.

// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// If target is found in the array return its index, otherwise, return -1.

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Solution 1 O(logn) time | O(1) space

var search = function(nums, target) {
  if (nums.length === 0) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      // left side is sorted
      if (nums[mid] >= nums[left]) {
          if (nums[left] <= target && nums[mid] > target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }

      // right side is sorted
      } else {
          if (target <= nums[right] && nums[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  return -1;
};

// Solution 2 cleaner binary search

var search = function(nums, target) {
    if (nums.length === 0) return -1;
    let pivot = findPivot(nums);
    if (nums[pivot] > target) return -1;
    if (nums[pivot] === target) return pivot;
    let left = 0, right = nums.length - 1;
    if (target < nums[0]) left = pivot;
    else if (pivot !== 0) right = pivot;
    return binarySearch(left, right, nums, target);
};

function findPivot(arr) {
    let l = 0, r = arr.length - 1;
    if (arr[l] <= arr[r]) return 0;
    while (l < r) {
        let m = Math.floor((r + l) / 2);
        if (arr[m] > arr[r]) l = m + 1;
        else r = m;
    }
    return l;
}

function binarySearch(left, right, arr, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
