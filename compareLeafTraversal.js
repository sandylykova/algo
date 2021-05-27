// AlgoExpert: Compare Leaf Traversal
// Difficulty: very hard

// Solution 1 O(n + m) time | O(n + m) space, where n is the number of nodes in the first tree, m is the number of nodes in the second tree

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function compareLeafTraversal(tree1, tree2) {
	let leaves1 = dfs(tree1);
	let leaves2 = dfs(tree2);
	function dfs(node) {
		let leaves = [];
		let stack = [node];
		while (stack.length > 0) {
			let len = stack.length;
			for (let i = 0; i < len; i++) {
				let currentNode = stack.pop();
				if (!currentNode.left && !currentNode.right) {
					leaves.push(currentNode.value);
				}
				if (currentNode.left) stack.push(currentNode.left);
				if (currentNode.right) stack.push(currentNode.right);
			}
		}
		return leaves;
	}
	if (leaves1.length !== leaves2.length) return false;
	for (let i = 0; i < leaves1.length; i++) {
		if (leaves1[i] !== leaves2[i]) return false;
	}
  return true;
}

// Solution 1 O(n + m) time | O(h1 + h2) space, where n is the number of nodes in the first tree, m is the number of nodes in the second tree, h1 is the height of the first tree, h2 is the height of the second tree

function compareLeafTraversal(tree1, tree2) {
	let tree1Stack = [tree1];
	let tree2Stack = [tree2];
	while (tree1Stack.length > 0 && tree2Stack.length > 0) {
		let leaf1 = getNextLeaf(tree1Stack);
		let leaf2 = getNextLeaf(tree2Stack);
		if (leaf1.value !== leaf2.value) return false;
	}
	return tree1Stack.length === 0 && tree2Stack.length === 0;
}

function getNextLeaf(stack) {
	let node = stack.pop();
	while (!isLeaf(node)) {
		if (node.right) stack.push(node.right);
		if (node.left) stack.push(node.left);
		node = stack.pop();
	}
	return node;
}

function isLeaf(node) {
	return node.left === null && node.right === null;
}
