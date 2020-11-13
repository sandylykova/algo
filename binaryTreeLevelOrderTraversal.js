// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Solution 1 O(n) time | O(n) space

var levelOrder = function(root) {
  if (root === null) return [];
  let results = [];
  function traverse(node, level) {
      if (results[level] === undefined) {
          results[level] = [node.val];
      } else {
          results[level].push(node.val);
      }
      if (node.left) traverse(node.left, level + 1);
      if (node.right) traverse(node.right, level + 1);
  }
  traverse(root, 0);
  return results;
};
