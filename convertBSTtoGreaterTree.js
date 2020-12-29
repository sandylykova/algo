// 538. Convert BST to Greater Tree

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Solution 1 O(n) time | O(n) space

var convertBST = function(root) {
  if (!root) return root;
  let runningSum = 0;
  function inOrderRightTraversal(root) {
      if (root.right) inOrderRightTraversal(root.right);
      runningSum += root.val;
      root.val = runningSum;
      if (root.left) inOrderRightTraversal(root.left);
  }
  let node = root;
  inOrderRightTraversal(node);
  return root;
};
