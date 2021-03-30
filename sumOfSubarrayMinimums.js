// 907. Sum of Subarray Minimums

// Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation:
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

// Solution 1 O(n^2) time | O(1) space

var sumSubarrayMins = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      let min = arr[i];
      sum += min;
      for (let j = i + 1; j < arr.length; j++) {
          if (min > arr[j]) {
              min = arr[j];
          }
          sum += min;
      }
  }
  return sum % (Math.pow(10, 9) + 7);
};
