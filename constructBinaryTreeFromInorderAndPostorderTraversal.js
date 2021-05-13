// 106. Construct Binary Tree from Inorder and Postorder Traversal

// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// Solution 1 with modification of postorder

var buildTree = function(inorder, postorder) {
  let hash = {};
  inorder.forEach((el, i) => hash[el] = i);
  function traverse(start, end) {
      if (start > end) return null;
      let root = new TreeNode(postorder.pop());
      let val = root.val;
      root.right = traverse(hash[val] + 1, end);
      root.left = traverse(start, hash[val] - 1);
      return root;
  }
  return traverse(0, inorder.length - 1);
};

// Solution 2 without modification of postorder

var buildTree = function(inorder, postorder) {
  let indeciesInorder = new Map();
  for (let i = 0; i < inorder.length; i++) {
      indeciesInorder.set(inorder[i], i);
  }
  let rootIdx = postorder.length - 1;
  function traverse(start, end) {
      if (rootIdx < 0 || start > end) return null;
      let val = postorder[rootIdx--];
      let root = new TreeNode(val);
      let idxInInorder = indeciesInorder.get(val);
      root.right = traverse(idxInInorder + 1, end);
      root.left = traverse(start, idxInInorder - 1);
      return root;
  }
  return traverse(0, postorder.length - 1);
};
