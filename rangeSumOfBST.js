// 938. Range Sum of BST

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

// Solution 1 O(n) time | O(n) space

var rangeSumBST = function(root, low, high) {
  let sum = 0;
  function dfs(node) {
      if (!node) return;
      if (node.val >= low && node.val <= high) {
          sum += node.val;
      }
      if (node.val > low) dfs(node.left);
      if (node.val < high) dfs(node.right);
  }
  dfs(root);
  return sum;
};
