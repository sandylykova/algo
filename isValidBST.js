// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

var isValidBST = function(root, min = -Infinity, max=Infinity) {
  if (!root) return true;
  if (min >= root.val || max <= root.val) return false;
  let leftIsValid = isValidBST(root.left, min, root.val);
  let rightIsValid = isValidBST(root.right, root.val, max);
  return leftIsValid && rightIsValid;
};
