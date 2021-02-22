// AlgoExpert: Find Kth Largest Value in BST
// Difficulty: medium

// Solution 1 O(n) time | O(n) space - where n is the number of nodes in BST

function findKthLargestValueInBst(tree, k) {
	let nodes = [];
  function reserseInOrderTraversal(node) {
		if (node === null) return;
		reserseInOrderTraversal(node.right);
		nodes.push(node.value);
		reserseInOrderTraversal(node.left);
	}
	reserseInOrderTraversal(tree);
  return nodes[k - 1];
}
