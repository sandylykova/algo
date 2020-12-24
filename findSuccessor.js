// Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node) as well as a node contained in that tree and returns the given node's successor.

// A node's successor is the next node to be visited (immediately after the given node) when traversing its tree using the in-order tree-traversal technique. A node has no successor if it's the last node to be visited in the in-order traversal.

// If a node has no successor, your function should return null.

// Solution 1 O(n) time, where n is the number of nodes in the tree | O(n) space

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
	let result = [];
  function inOrderTraverse(tree) {
		if (tree === null) return;
		inOrderTraverse(tree.left);
		result.push(tree);
		inOrderTraverse(tree.right);
	}
	inOrderTraverse(tree);
	for (let i = 0; i < result.length; i++) {
		if (result[i] === node && i < result.length - 1) {
			return result[i + 1];
		}
	}
  return null;
}
