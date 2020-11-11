// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1

// Solution 1 O(n) time | O(n) space

var kthSmallest = function(root, k) {
  if (!root) return root;
  let values = [];
  function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
  }
  traverse(root);
  return values[k - 1];
};

