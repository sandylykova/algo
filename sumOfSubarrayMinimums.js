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

// Solution 2 with monotonic stack
// In monotonic stack smaller element "eats" previous bigger element (>= or > just in one case either left side smaller or right side smaller to handle duplicates).

var sumSubarrayMins = function(arr) {
  let prevLess = [];
  let nextLess = [];
  let pL = [];
  let nL = [];
  for (let i = 0; i < arr.length; i++) {
      let count = 1;
      while (pL.length && pL[pL.length - 1][0] > arr[i]) {
          let val = pL.pop();
          count += val[1];
      }
      prevLess[i] = count;
      pL.push([arr[i], count]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
      let count = 1;
      while (nL.length && nL[nL.length - 1][0] >= arr[i]) {
          let val = nL.pop();
          count += val[1];
      }
      nextLess[i] = count;
      nL.push([arr[i], count]);
  }
  let result = 0;
  let mod = 1000000007;
  for (let i = 0; i < arr.length; i++) {
      result += arr[i] * prevLess[i] * nextLess[i];
  }
  return result % mod;
};
