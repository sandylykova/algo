// AlgoExpert: Find Nodes Distance K
// difficulty: hard

// Solution 1

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
	let parents = new Map();
	let targetNode = null;
	let ans = [];
	function getParents(tree, map) {
		if (tree === null) return;
		if (tree.value === target) targetNode = tree;
		if (tree.left) {
			map.set(tree.left, tree);
		}
		if (tree.right) {
			map.set(tree.right, tree);
		}
		getParents(tree.left, map);
		getParents(tree.right, map);
	}
	getParents(tree, parents);
	return bfs(targetNode, parents, ans, k);

}

function bfs(node, parents, ans, k) {
	let queue = [node];
	let counter = 0;
	let visited = new Set();
	while (queue.length > 0) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let current = queue.shift();
			if (visited.has(current)) continue;
			visited.add(current);
			if (counter === k) {
				ans.push(current.value);
			}
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
			if (parents.get(current)) queue.push(parents.get(current));
		}
		if (counter === k) {
			return ans;
		}
		counter++;
	}
	return [];
}
