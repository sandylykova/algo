// 450. Delete Node in a BST

// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.

// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

// Solution 1 O(h) time | O(h) space

var deleteNode = function(root, key) {
  if (!root) return null;
  if (key < root.val) root.left = deleteNode(root.left, key);
  else if (key > root.val) root.right = deleteNode(root.right, key);
  else {
      if (root.left === null && root.right === null) root = null;
      else if (root.right !== null) {
          let successor = findSuccessor(root.right);
          root.val = successor.val;
          root.right =  deleteNode(root.right, root.val);
      } else {
          let predecessor = findPredecessor(root.left);
          root.val = predecessor.val;
          root.left = deleteNode(root.left, root.val);
      }
  }
  return root;
};


function findPredecessor(node) {
  while (node.right) {
      node = node.right;
  }
  return node;
}

function findSuccessor(node) {
  while (node.left) {
      node = node.left;
  }
  return node;
}
