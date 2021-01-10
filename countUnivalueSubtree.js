// 250. Count Univalue Subtrees

// Given the root of a binary tree, return the number of uni-value subtrees.

// A uni-value subtree means all nodes of the subtree have the same value.

// Input: root = [5,1,5,5,5,null,5]
// Output: 4

// Solution 1

var countUnivalSubtrees = function(root) {
  if (!root) return 0;
  let count = 0;
  function DFS(node) {
      if (!node) return true;
      let left = DFS(node.left);
      let right = DFS(node.right);
      if (left && right) {
          if (node.left !== null && node.val !== node.left.val) {
              return false;
          }
          if (node.right !== null && node.val !== node.right.val) {
              return false;
          }
          count++;
          return true;
      }
      return false;
  }
  DFS(root);
  return count;
};
