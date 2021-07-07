// 1469. Find All The Lonely Nodes

// In a binary tree, a lonely node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

// Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any order.

// Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2]
// Output: [6,2]

// Solution 1 O(n) time | O(n) space

var getLonelyNodes = function(root) {
  if (!root) return [];
  let lonelyNodes = [];
  function dfs(node) {
      if (!node) return;
      if (!node.left && node.right) lonelyNodes.push(node.right.val);
      if (node.left && !node.right) lonelyNodes.push(node.left.val);
      dfs(node.left);
      dfs(node.right);
  }
  dfs(root);
  return lonelyNodes;
};
