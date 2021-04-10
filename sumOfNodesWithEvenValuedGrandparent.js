// 1315. Sum of Nodes with Even-Valued Grandparent

// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

// Solution 1 O(n) time | O(h) space

var sumEvenGrandparent = function(root) {
  if (!root) return 0;
  let sum = 0;
  function dfs(node, parent, grandParent) {
      if (node.left) {
          dfs(node.left, node, parent);
      }
      if (node.right) {
          dfs(node.right, node, parent);
      }
      if (grandParent && grandParent.val % 2 === 0) sum += node.val;
  }
  dfs(root, null, null);
  return sum;
};
