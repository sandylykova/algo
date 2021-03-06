// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// Solution 1 merge and sort
// O((n + m)log(n + m)) time | O(1) space

var merge1 = function(nums1, m, nums2, n) {
    nums1.splice(m, n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
    return nums1;
};

// Solution 2 with two pointers and starting from the end
// O(n + m) time | O(1) space

var merge2 = function(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  for(let i = nums1.length - 1; i >= 0; i--) {
      if (second < 0) break;
      if (nums1[first] > nums2[second]) {
         nums1[i] = nums1[first];
         first--;

      } else {
        nums1[i] = nums2[second];
        second--;
      }
  }
   return nums1;
};

// Solution 3 with two pointers and starting from the beginning
// O(n + m) time | O(n) space

var merge3 = function(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let copyNums1 = nums1.slice();
  for (let i = 0; i < nums1.length; i++) {
      if (p1 < m && p2 < n) {
          if (copyNums1[p1] <= nums2[p2]) {
              nums1[i] = copyNums1[p1];
              p1++;
          } else if (copyNums1[p1] > nums2[p2]){
              nums1[i] = nums2[p2];
              p2++;
          }
      } else if (p1 >= m) {
          nums1[i] = nums2[p2];
          p1++;
          p2++;
      } else if (p2 >= n) {
          nums1[i] = copyNums1[p1];
          p1++;
      }
  }
  return nums1;
};
