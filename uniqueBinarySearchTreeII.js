// 95. Unique Binary Search Trees II

// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

var generateTrees = function(n) {
  function recursive(start, end) {
      let tree = [];
      if (start > end) return [null];
      for (let i = start; i <= end; i++) {
          let left = recursive(start, i - 1);
          let right = recursive(i + 1, end);
          for (let r = 0; r < right.length; r++) {
              for (let l = 0; l < left.length; l++) {
                  let root = new TreeNode(i);
                  root.left = left[l];
                  root.right = right[r];
                  tree.push(root);
              }
          }
      }
      return tree;
  }
  return recursive(1, n);
};
