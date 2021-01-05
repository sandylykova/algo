// 617. Merge Two Binary Trees

// Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Input:
// 	Tree 1                     Tree 2
//           1                         2
//          / \                       / \
//         3   2                     1   3
//        /                           \   \
//       5                             4   7

// Output:
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \
// 	 5   4   7

// Solution 1: iterative O(n) time | O(n). We traverse over a total of n nodes. Here, n refers to the smaller of the number of nodes in the two trees.

var mergeTrees = function(t1, t2) {
  if (!t1 || !t2)
      return t1 || t2;
  let stack = [[t1, t2]];
  while (stack.length > 0) {
      let [val1, val2] = stack.pop();
      if (!val1 || !val2) continue;
      val1.val += val2.val;
      if (!val1.left) {
          val1.left = val2.left;
      } else {
          stack.push([val1.left, val2.left]);
      }
      if (!val1.right) {
          val1.right = val2.right;
      } else {
          stack.push([val1.right, val2.right]);
      }
  }
  return t1;
};

// Solution 2: creating a new tree

var mergeTrees = function(t1, t2) {
    if (!t1 || !t2) return t1 || t2;
    let root = new TreeNode(t1.val + t2.val);
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
    return root;
};
