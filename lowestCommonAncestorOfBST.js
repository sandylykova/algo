// 235. Lowest Common Ancestor of a Binary Search Tree

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Solution 1 without taking advantage of BST

var lowestCommonAncestor = function(root, p, q) {
    return getLCA(root, p, q).LCA;
};

function getLCA(node, one, two) {
    let numberOfNodes = 0;
    let children = [];
    if (node.left) children.push(node.left);
    if (node.right) children.push(node.right);
    for (let child of children) {
        let info = getLCA(child, one, two);
        if (info.LCA !== null) return info;
        numberOfNodes += info.numberOfNodes;
    }
    if (node.val === one.val || node.val === two.val) numberOfNodes++;
    let LCA = numberOfNodes === 2 ? node : null;
    return {LCA, numberOfNodes};
}

// Solution 2 O(n) time | O(n) space

var lowestCommonAncestor = function(root, p, q){
  if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
      return lowestCommonAncestor(root.right, p, q);
  } else {
      return root;
  }
};


