// 124. Binary Tree Maximum Path Sum

// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any node sequence from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Solution 1 O(n) time | O(log(n)) space - because of call stack

function maxPathSum(tree) {
	let maxGain = -Infinity;
  function traverse(node) {
		if (!node) return 0;
		let leftGain = Math.max(0, traverse(node.left));
		let rightGain = Math.max(0, traverse(node.right));
		let currBestGain = node.value + leftGain + rightGain;
		maxGain = Math.max(maxGain, currBestGain);
		return node.value + Math.max(leftGain, rightGain);
	}
	traverse(tree);
	return maxGain;
}

// Solution 2 O(n) time | O(log(n)) space - because of call stack

function maxPathHelper(node) {
	if (!node) return [0, -Infinity];
	let [leftMaxSumAsBranch, leftMaxPathSum] = maxPathHelper(node.left);
	let [rightMaxSumAsBranch, rightMaxPathSum] = maxPathHelper(node.right);
	let {value} = node;
	let maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
	let maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
	let maxSumWithRootNode = Math.max(maxSumAsBranch, leftMaxSumAsBranch + value + rightMaxSumAsBranch);
	let runningMax = Math.max(maxSumWithRootNode, leftMaxPathSum, rightMaxPathSum);
	return [maxSumAsBranch, runningMax];
}
