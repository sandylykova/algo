// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Solution 1

var binaryTreePaths = function(root) {
  let ans = [];
  if (!root) return ans;
  function traverse(node, current) {
      if (node === null) return;
      if (node.left === null && node.right === null) {
          let newCurr = current.concat(node.val);
          ans.push(newCurr.join('->'));
          return;
      } else {
          let newCurr = current.concat(node.val);
          traverse(node.left, newCurr);
          traverse(node.right, newCurr);
      }
  }
  traverse(root, []);
  return ans;
};
