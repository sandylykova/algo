// 865. Smallest Subtree with all the Deepest Nodes

// Given the root of a binary tree, the depth of each node is the shortest distance to the root.

// Return the smallest subtree such that it contains all the deepest nodes in the original tree.

// A node is called the deepest if it has the largest depth possible among any node in the entire tree.

// The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.

// Solution 1 O(n) time | O(h) time, where n is the number of nodes, h is the height of tree

var subtreeWithAllDeepest = function(root) {
  if (!root) return null;
  let maxDepth = getMaxDepth(root, 0);
  return getLCA(root, maxDepth, 0);
};

function getMaxDepth(node, depth) {
  if (!node) return depth - 1;
  let leftDepth = getMaxDepth(node.left, depth + 1);
  let rightDepth = getMaxDepth(node.right, depth + 1);
  return Math.max(leftDepth, rightDepth);
}

function getLCA(node, maxDepth, depth) {
  if (!node) return null;
  if (depth === maxDepth) return node;
  let leftSubtree = getLCA(node.left, maxDepth, depth + 1);
  let rightSubtree = getLCA(node.right, maxDepth, depth + 1);
  if (leftSubtree && rightSubtree) return node;
  if (leftSubtree) return leftSubtree;
  if (rightSubtree) return rightSubtree;
  return null;
}
