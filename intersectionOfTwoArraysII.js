// Given two arrays, write a function to compute their intersection.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

var intersect = function(nums1, nums2) {
  let map = new Map();
  let result = [];
  for (let num of nums1) {
      map.set(num, map.get(num) + 1 || 1);
  }
  for (let num of nums2) {
      if (map.has(num)) {
          result.push(num);
          let count = map.get(num) - 1;
          if (count === 0) map.delete(num);
          else map.set(num, count);
      }
  }
  return result;
};
