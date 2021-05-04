// 530. Minimum Absolute Difference in BST

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

// Input: root = [4,2,6,1,3]
// Output: 1

// Solution 1 O(n) time | O(n) space

var getMinimumDifference = function(root) {
  let min = Infinity;
  let prev = null;
  function traverse(node) {
      if (!node) return;
      traverse(node.left);
      if (prev !== null) min = Math.min(node.val - prev.val, min);
      prev = node;
      traverse(node.right);
  }
  traverse(root);
  return min;
};
