// 236. Lowest Common Ancestor of a Binary Tree

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Solution 1

var lowestCommonAncestor = function(root, p, q) {
  if (!root) return root;
  let depthOne = getDepth(root, p, 0);
  let depthTwo = getDepth(root, q, 0);
  if (depthOne > depthTwo) {
      return getCommonAncestor(p, q, depthOne, depthTwo);
  } else {
      return getCommonAncestor(q, p, depthTwo, depthOne);
  }
};

function getCommonAncestor(nodeWithBiggerDepth, nodeWithLowerDepth, d1, d2) {
  while (d1 !== d2) {
      nodeWithBiggerDepth = nodeWithBiggerDepth.parent;
      d1--;
  }
  if (nodeWithBiggerDepth === nodeWithLowerDepth) {
      return nodeWithLowerDepth;
  }
  while (nodeWithBiggerDepth.parent !== nodeWithLowerDepth.parent) {
      nodeWithBiggerDepth = nodeWithBiggerDepth.parent;
      nodeWithLowerDepth = nodeWithLowerDepth.parent;
  }
  return nodeWithLowerDepth.parent;
}

const getDepth = (root, target, level) => {
  let stack = [[root, level, null]];
  while (stack.length) {
      let [node, level, parent] = stack.pop();
      node.parent = parent;
      if (node === target) return level;
      if (node.left) {
          stack.push([node.left, level + 1, node]);
      }
      if (node.right) {
          stack.push([node.right, level + 1, node]);
      }
  }
};
