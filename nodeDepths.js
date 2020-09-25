// The distance between a node in a Binary Tree and the tree's root is called the node's depth.
// Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

// Solution 1
// O(n) time | O(h) where h - the height of the binary tree

function nodeDepths1(root, depth = 0) {
	if (!root) return 0;
	let sum = depth + nodeDepths1(root.left, depth + 1) + nodeDepths1(root.right, depth + 1);
	return sum;
}

// Solution 2
// O(n) time | O(h) where h - the height of the binary tree

function nodeDepths2(root) {
	let sumOfDepth = 0;
	let depthStack = [{node: root, depth: 0}];
	while (depthStack.length > 0) {
		const {node, depth} = depthStack.pop();
		sumOfDepth+=depth;
		if (node.left) depthStack.push({node: node.left, depth: depth + 1});
		if (node.right) depthStack.push({node: node.right, depth: depth + 1});
	}
	return sumOfDepth;
}
