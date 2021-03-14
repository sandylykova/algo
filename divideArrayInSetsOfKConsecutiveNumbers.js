// 1296. Divide Array in Sets of K Consecutive Numbers

// Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive numbers
// Return True if it is possible. Otherwise, return False.

// Input: nums = [1,2,3,3,4,4,5,6], k = 4
// Output: true
// Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].

// Solution 1

var isPossibleDivide = function(nums, k) {
  let map = new Map();
  let min = Infinity;
  for (let num of nums) {
      map.set(num, map.get(num) + 1 || 1);
      min = Math.min(min, num);
  }
  while (map.size > 0) {
      for (let i = 0; i < k; i++) {
          if (!map.has(min)) return false;
          else if (map.get(min) === 1) map.delete(min);
          else map.set(min, map.get(min) - 1);
          min++;
      }
      if (map.size > 0) min = getMin(map);
  }
  return true;
};

function getMin(map) {
  let min = Infinity;
  for (let [key, val] of map) {
       min = Math.min(min, key);
  }
  return min;
}
