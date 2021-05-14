// 297. Serialize and Deserialize Binary Tree

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Solution 1

var serialize = function(root) {
  function preorderTraversal(node) {
      if (!node) return 'null';
      let left = preorderTraversal(node.left);
      let right = preorderTraversal(node.right);
      return node.val + ',' + left + ',' + right;
  }
  return preorderTraversal(root);
};

var deserialize = function(data) {
  let vals = data.split(',');
  let idx = 0;
  function recursive() {
      if (idx < vals.length) {
          let current = vals[idx++];
          if (current === 'null') return null;
          let root = new TreeNode(current);
          root.left = recursive();
          root.right = recursive();
          return root;
      }
  }
  return recursive();
};
