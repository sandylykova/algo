// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// Solution 1

var buildTree = function(preorder, inorder) {
  let indexOfRoot = 0;
  let hash = new Map();
  inorder.forEach((val, i) => hash.set(val, i));
  function traverse(start, end) {
      if (start > end) return null;
      let root = new TreeNode(preorder[indexOfRoot]);
      indexOfRoot++;
      let val = root.val;
      root.left = traverse(start, hash.get(val) - 1);
      root.right = traverse(hash.get(val) + 1, end);
      return root;
  }
  return traverse(0, inorder.length - 1);
};
