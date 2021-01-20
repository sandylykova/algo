// 652. Find Duplicate Subtrees

// Given the root of a binary tree, return all duplicate subtrees.

// For each kind of duplicate subtrees, you only need to return the root node of any one of them.

// Two trees are duplicate if they have the same structure with the same node values.

// Input: root = [1,2,3,4,null,2,4,null,null,4]
// Output: [[2,4],[4]]

// Solution 1

var findDuplicateSubtrees = function(root) {
  let table = {};
  let ans = [];
  function traverse(node) {
      if (!node) return '#';
      let serial = node.val + '.' + traverse(node.left) + '.' + traverse(node.right);
      if (!(serial in table)) table[serial] = 1;
      else table[serial]++;
      if (table[serial] === 2) ans.push(node);
      return serial;
  }
  traverse(root);
  return ans;
};
