// 1123. Lowest Common Ancestor of Deepest Leaves

// Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

// Recall that:

// The node of a binary tree is a leaf if and only if it has no children
// The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
// The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.

// Solution 1 O(n) time | O(h) time, where n is the number of nodes, h is the height of tree

var lcaDeepestLeaves = function(root) {
  let maxDepth = getMaxDepth(root, 0);
  return getLCA(root, maxDepth, 0);
};

function getLCA(node, maxDepth, depth) {
  if (node === null) return null;
  if (depth === maxDepth) return node;
  let left = getLCA(node.left, maxDepth, depth + 1);
  let right = getLCA(node.right, maxDepth, depth + 1);
  if (left && right) return node;
  if (left) return left;
  if (right) return right;
  return null;
}

function getMaxDepth(node, depth) {
  if (node === null) {
      return depth - 1;
  }
  let left = getMaxDepth(node.left, depth + 1);
  let right = getMaxDepth(node.right, depth + 1);
  return Math.max(left, right);
}
