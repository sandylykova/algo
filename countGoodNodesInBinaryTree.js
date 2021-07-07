// 1448. Count Good Nodes in Binary Tree

// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

// Solution 1 O(n) time | O(n) space

var goodNodes = function(root) {
  let counter = 0;
  function dfs(node, max) {
      if (!node) return;
      if (node.val >= max) {
          counter += 1;
      }
      max = Math.max(max, node.val);
      dfs(node.left, max);
      dfs(node.right, max);
  }
  dfs(root, -Infinity);
  return counter;
};
