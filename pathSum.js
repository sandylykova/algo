// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.
// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// Solution 1 recursive

var hasPathSum = function(root, sum) {
  if (!root) return false;
  let results = [];
  function traverse(node, runningSum) {
      runningSum += node.val;
      if (!node.left && !node.right) {
          results.push(runningSum);
      }
      node.left && traverse(node.left, runningSum);
      node.right && traverse(node.right, runningSum);
  }
  traverse(root, 0);
  for (let i = 0; i < results.length; i++) {
      if (results[i] === sum) return true;
  }
  return false;
};
