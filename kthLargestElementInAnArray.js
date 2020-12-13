// 215. Kth Largest Element in an Array

// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.


// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Solution 1

var findKthLargest = function(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(nums, start, end, k) {
  let pivotIndex = partition(nums, start, end);
  if (k > nums.length - pivotIndex) {
      return quickSelect(nums, start, pivotIndex - 1, k);
  } else if (k < nums.length - pivotIndex) {
      return quickSelect(nums, pivotIndex + 1, end, k);
  } else {
      return nums[pivotIndex];
  }
}

function partition(nums, start, end) {
  let pivot = nums[end];
  let i = start;
  let j = end - 1;
  while (i <= j) {
      while (nums[i] < pivot) i++;
      while (nums[j] > pivot) j--;
      if (i <= j) {
          swap(i, j, nums);
          i++;
          j--;
      }
  }
  swap(i, end, nums);
  return i;
}

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
