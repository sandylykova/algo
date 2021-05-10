// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Solution 1 O(n) time | O(n) space

var inorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  let curr = root;
  let stack = [];
  while (true) {
      if (curr !== null) {
          stack.push(curr);
          curr = curr.left;
      } else {
          if (stack.length === 0) break;
          curr = stack.pop();
          result.push(curr.val);
          curr = curr.right;
      }
  }
  return result;
};

