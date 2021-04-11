// 988. Smallest String Starting From Leaf

// Given the root of a binary tree, each node has a value from 0 to 25 representing the letters 'a' to 'z': a value of 0 represents 'a', a value of 1 represents 'b', and so on.

// Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

// (As a reminder, any shorter prefix of a string is lexicographically smaller: for example, "ab" is lexicographically smaller than "aba".  A leaf of a node is a node that has no children.)

// Input: [25,1,3,1,3,0,2]
// Output: "adz"

// Solution 1

var smallestFromLeaf = function(root) {
  if (!root) return '';
  let smallest = null;
  let al = 'abcdefghijklmnopqrstuvwxyz';
  function dfs(node, str) {
      if (node === null) return;
      let currentStr = al[node.val] + str;
      if (!node.left && !node.right) {
          if (smallest === null || smallest > currentStr) {
              smallest = currentStr;
          }
      }
      dfs(node.left, currentStr);
      dfs(node.right, currentStr);
  }
  dfs(root, '');
  return smallest;
};
