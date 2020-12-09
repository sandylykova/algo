// Write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree. A path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes. The length of a path is the number of edges between the path's first node and its last node.

// Solution 1 O(n) time | O(h) space - where n is the number of nodes in the binary tree and h is the height of the binary tree.

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
	if (tree === null) {
		return new TreeInfo(0, 0);
	}
	const leftTreeInfo = getTreeInfo(tree.left);
	const rightTreeInfo = getTreeInfo(tree.right);
	const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
	const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
	const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
	const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

	return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
	constructor(diameter, height) {
		this.diameter = diameter;
		this.height = height;
	}
}

// Solution 2

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  let diameter = -1;
	function traverse(node) {
		if (!node) return 0;
		let left = traverse(node.left);
		let right = traverse(node.right);
		diameter = Math.max(diameter, left + right);
		return Math.max(left, right) + 1;
	}
	traverse(tree);
  return diameter;
}

// Solution 3

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
	if (!tree) return 0;
	let leftHeight = heightOfBinaryTree(tree.left);
	let rightHeight = heightOfBinaryTree(tree.right);
	let leftDiameter = binaryTreeDiameter(tree.left);
	let rightDiameter = binaryTreeDiameter(tree.right);
	let currMaxDiameter = Math.max(leftHeight + rightHeight + 2, leftDiameter, rightDiameter);
	return currMaxDiameter;
}

function heightOfBinaryTree(node) {
	if (!node) return -1;
	let leftHeight = heightOfBinaryTree(node.left);
	let rightHeight = heightOfBinaryTree(node.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

