// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Solution 1 BFS using a queue O(n) time | O(n) space

var maxDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let depth = 0;
  let len;
  while (queue.length > 0) {
      len = queue.length;
      for (let i = 0; i < len; i++) {
          let node = queue.pop();
          if (node.left) queue.unshift(node.left);
          if (node.right) queue.unshift(node.right);
      }
      depth++;
  }
  return depth;
};

// Solution 2 with recursion O(n) time | O(n) space

var maxDepth = function(root) {
  if (!root) return 0;
  let leftHeight = 1 + maxDepth(root.left);
  let rightHeight = 1 + maxDepth(root.right);
  return Math.max(leftHeight, rightHeight);
};
