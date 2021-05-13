// AlgoExpert: Iterative In-order Traversal
// Difficulty: very hard

// Solution 1 O(n) time | O(1) space

function iterativeInOrderTraversal(tree, callback) {
  let prev = null;
	let node = tree;
	let next = null;
	while (node !== null) {
		if (prev === null || prev === node.parent) {
			if (node.left) {
				next = node.left;
			} else {
				callback(node);
				if (node.right) {
					next = node.right;
				} else {
					next = node.parent;
				}
			}
		} else if (node.right === prev) {
			next = node.parent;
		} else {
			callback(node);
			if (node.right) {
				next = node.right;
			} else {
				next = node.parent;
			}
		}
		prev = node;
		node = next;
	}
}
