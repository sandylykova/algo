// 222. Count Complete Tree Nodes

// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Input: root = [1,2,3,4,5,6]
// Output: 6

// Solution 1 O(d^2) or O((log^2)n) time | O(d) space

var countNodes = function(root) {
  if (!root) return 0;
  let leftDepth = getDepth(root, true);
  let rightDepth = getDepth(root, false);
  if (leftDepth === rightDepth) {
      return Math.pow(2, leftDepth) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};

function getDepth(root, left) {
  let count = 0;
  if (left) {
      while (root) {
          root = root.left;
          count++;
      }
  } else {
      while (root) {
          root = root.right;
          count++;
      }
  }
  return count;
}
