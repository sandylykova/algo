// 366. Find Leaves of Binary Tree

// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

// Input: [1,2,3,4,5]

//           1
//          / \
//         2   3
//        / \
//       4   5

// Output: [[4,5,3],[2],[1]]

// Solution 1 O(n) time | O(n) space

var findLeaves = function(root) {
  if (!root) return [];
  let result = [];
  function traverse(node) {
      if (node === null) return -1;
      let leftHeight = traverse(node.left);
      let rightHeight = traverse(node.right);
      let currHeight = Math.max(leftHeight, rightHeight) + 1;
      if (result[currHeight] === undefined) result[currHeight] = [node.val];
      else result[currHeight].push(node.val);
      return currHeight;
  }
  traverse(root);
  return result;
};
