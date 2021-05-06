// 298. Binary Tree Longest Consecutive Sequence

// Given the root of a binary tree, return the length of the longest consecutive sequence path.

// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path needs to be from parent to child (cannot be the reverse).

// Input: root = [1,null,3,2,4,null,null,null,5]
// Output: 3
// Explanation: Longest consecutive sequence path is 3-4-5, so return 3.

// Solution 1 O(n) time | O(n) space

var longestConsecutive = function(root) {
  let max = 0;
  if (!root) return max;
  function traverse(node, path, parent) {
      max = Math.max(max, path);
      if (!node) return;
      let newPath = parent && node.val - 1 === parent.val ? path + 1 : 1;
      traverse(node.left, newPath, node);
      traverse(node.right, newPath, node);
  }
  traverse(root, 0, null);
  return max;
};
