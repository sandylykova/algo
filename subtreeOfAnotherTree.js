// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// Solution 1 O(n) time | O(n) space

var isSubtree = function(root, subRoot) {
  let ans = false;
  function traverse(node) {
      if (!ans) {
          if (!node) return;
          if (node.val === subRoot.val) {
              ans = check(node, subRoot);
          }
          traverse(node.left);
          traverse(node.right);
      }
  }
  traverse(root);
  return ans;
};

function check(root, subRoot) {
  if (root === null && subRoot === null) return true;
  if (!root || !subRoot) return false;
  let left = check(root.left, subRoot.left);
  let right = check(root.right, subRoot.right);
  return left && right && root.val === subRoot.val;
}
