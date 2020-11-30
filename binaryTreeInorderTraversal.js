// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Solution 1 recursive

var inorderTraversal = function(root, result = []) {
  if (!root) return result;
  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);
  return result;
};

// Solution 2 iterative

var inorderTraversal = function(root) {
  let result = [];
  if (!root) return result;
  let stack = [];
  let curr = root;
  while (curr!== null || stack.length > 0) {
      while (curr !== null) {
          stack.push(curr);
          curr = curr.left;
      }
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
  }
  return result;
};
