// 108. Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted.

// Solution 1

var sortedArrayToBST = function(nums) {
  function helper(start, end) {
      if (start > end) return null;
      let mid = Math.floor((start + end) / 2);
      let root = new TreeNode(nums[mid]);
      root.left = helper(start, mid - 1);
      root.right = helper(mid + 1, end);
      return root;
  }
  return helper(0, nums.length - 1);
};
