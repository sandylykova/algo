// 501. Find Mode in Binary Search Tree

// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

// If the tree has more than one mode, return them in any order.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [1,null,2,2]
// Output: [2]

// Solution 1 O(n) time | O(n) space

var findMode = function(root) {
  let maxFrequent = [null, 0];
  let map = new Map();
  function traverse(node) {
      if (!node) return;
      map.set(node.val, map.get(node.val) + 1 || 1);
      if (map.get(node.val) > maxFrequent[1]) {
          maxFrequent = [[node.val], map.get(node.val)];
      } else if (map.get(node.val) === maxFrequent[1]) {
          maxFrequent[0].push(node.val);
      }
      if (node.left) {
          traverse(node.left);
      }
      if (node.right) {
          traverse(node.right);
      }

  }
  traverse(root);
  return maxFrequent[0];
};

// Solution 2 O(n) time | O(1) space

var findMode = function(root) {
  let count = 0;
  let modes = [];
  let prevNode = null;
  let maxCount = -Infinity;
  function inOrderTraversal(node) {
      if (node === null) return;
      inOrderTraversal(node.left);
      count = node.val === prevNode ? count + 1 : 1;
      prevNode = node.val;
      if (count > maxCount) {
          maxCount = count;
          modes = [node.val];
      } else if (count === maxCount) {
          modes.push(node.val);
      }
      inOrderTraversal(node.right);
  }
  inOrderTraversal(root);
  return modes;
};
