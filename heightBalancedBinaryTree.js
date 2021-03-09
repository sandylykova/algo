// AlgoExpert: Height Balanced Binary Tree
// Difficulty: medium

// Solution 1 O(n) time | O(h) space, where n is the number of nodes, h is the height of the binary tree

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
	let treeInfo = getHeight(tree);
	return treeInfo.isBalanced;
}

class  TreeNode {
	constructor(isBalanced, height) {
		this.isBalanced = isBalanced;
		this.height = height;
	}
}

function getHeight(tree) {
  if (tree === null) return new TreeNode(true, -1);
	let left = getHeight(tree.left);
	let right = getHeight(tree.right);
	let height = Math.max(left.height, right.height) + 1;
	let isBalanced = left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) < 2;
  return new TreeNode(isBalanced, height);
}
