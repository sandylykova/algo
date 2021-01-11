// 333. Largest BST Subtree

// Given the root of a binary tree, find the largest subtree, which is also a Binary Search Tree (BST), where the largest means subtree has the largest number of nodes.

// A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned properties:

// The left subtree values are less than the value of their parent (root) node's value.
// The right subtree values are greater than the value of their parent (root) node's value.
// Note: A subtree must include all of its descendants.

// Follow up: Can you figure out ways to solve it with O(n) time complexity?

// Solution 1 O(n) time | O(n) space

var largestBSTSubtree = function(root) {
  let res = largestBST(root);
  // [min, max, largestBST]
  return res[2];
};

const largestBST = (node) => {
  if (node === null) {
      return [Infinity, -Infinity, 0];
  }
  let left = largestBST(node.left);
  let right = largestBST(node.right);
  if (node.val > left[1] && node.val < right[0]) {
      return [Math.min(node.val, left[0]), Math.max(node.val, right[1]), left[2] + right[2] + 1];
  } else {
      return [-Infinity, Infinity, Math.max(left[2], right[2])];
  }
};
