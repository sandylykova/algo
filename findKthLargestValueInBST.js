// AlgoExpert: Find Kth Largest Value in BST
// Difficulty: medium

// Solution 1 O(n) time | O(n) space - where n is the number of nodes in BST

function findKthLargestValueInBst(tree, k) {
	let nodes = [];
  function reverseInOrderTraversal(node) {
		if (node === null) return;
		reverseInOrderTraversal(node.right);
		nodes.push(node.value);
		reverseInOrderTraversal(node.left);
	}
	reverseInOrderTraversal(tree);
  return nodes[k - 1];
}

// Solution 2 O(h + k) time | O(h + k) space - where h is the height of BST

function findKthLargestValueInBst(tree, k) {
	let nodes = [];
  function reverseInOrderTraversal(node) {
		if (node === null || nodes.length === k) return;
		reverseInOrderTraversal(node.right);
		nodes.push(node.value);
		reverseInOrderTraversal(node.left);
	}
	reverseInOrderTraversal(tree);
  return nodes[k - 1];
}
