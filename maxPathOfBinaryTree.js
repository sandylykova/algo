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
