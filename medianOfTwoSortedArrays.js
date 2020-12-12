// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

// Solution 1 O(log(min(n, m))) time | O(1) space

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  let len1 = nums1.length;
  let len2 = nums2.length;
  let start = 0;
  let end = len1;
  while (start <= end) {
      let position1 = Math.floor((start + end) / 2);
      let position2 = Math.floor((len1 + len2 + 1) / 2) - position1;
      let maxLeft1 = position1 === 0 ? -Infinity : nums1[position1 - 1];
      let minRight1 = position1 === len1 ? Infinity : nums1[position1];
      let maxLeft2 =  position2 === 0 ? -Infinity : nums2[position2 - 1];
      let minRight2 = position2 === len2 ? Infinity : nums2[position2];
      if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          if ((len1 + len2) % 2 === 0) {
              return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
          } else {
              return Math.max(maxLeft1, maxLeft2);
          }
      }
      if (maxLeft1 > minRight2) {
          end = position1 - 1;
      } else {
          start = position1 + 1;
      }
  }
};

