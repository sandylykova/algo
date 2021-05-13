// 145. Binary Tree Postorder Traversal

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [3,2,1]

var postorderTraversal = function(root) {
  let s1 = [root];
  let result = [];
  let s2 = [];
  if (!root) return result;
  let node;
  while (s1.length > 0) {
      node = s1.pop();
      s2.push(node);
      if (node.left) {
          s1.push(node.left);
      }
      if (node.right) {
          s1.push(node.right);
      }
  }
  while (s2.length > 0) {
      node = s2.pop();
      result.push(node.val);
  }
  return result;
};
