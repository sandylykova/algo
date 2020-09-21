// This is the class of the input tree.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution 1 using recursion
// Average case: O(log(n)) time & space (space because of recursion)
// Worst case: O(n) time & space

function findClosestValueInBst1(tree, target, minDifference, closestNode) {
	while (tree !== null) {
		let difference = Math.abs(target - tree.value);
		if (minDifference === undefined) minDifference = difference;
		if (minDifference > difference) {
			minDifference = difference;
			closestNode = tree.value;
		}
		if (tree.value === target) return tree.value;
		if (tree.value > target) {
			return findClosestValueInBst1(tree.left, target, minDifference, closestNode);
		}
		if (tree.value < target) {
			return findClosestValueInBst1(tree.right, target, minDifference, closestNode);
		}
	}
	return closestNode;
}

// Solution 2 iterative
// Average case: O(log(n)) time | O(1) space
// Worst case: O(n) time | O(1) space

function findClosestValueInBst2(tree, target) {
  let closest = tree.value;
	let currentNode = tree;
	while (currentNode !== null) {
		let currentDifference = Math.abs(currentNode.value - target);
		let closestDifference = Math.abs(closest - target);
		if (currentDifference < closestDifference) {
			closest = currentNode.value;
		}
		if (target > currentNode.value) {
			currentNode = currentNode.right;
		} else if (target < currentNode.value) {
			currentNode = currentNode.left;
		} else {
			break;
		}
	}
	return closest;
}
