// 897. Increasing Order Search Tree

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

// Solution 1 O(n) time | O(h) space

var increasingBST = function(root) {
  let newHead = null;
  let current = null;
  function inOrderTraversal(node) {
      if (!node) return;
      inOrderTraversal(node.left);
      if (newHead === null) {
          newHead = node;
          current = node;
      } else {
          node.left = null;
          current.right = node;
          current = current.right;
      }
      inOrderTraversal(node.right);

  }
  inOrderTraversal(root);
  return newHead;
};
