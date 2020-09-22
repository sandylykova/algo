// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum. A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

// tree =      10
//        /          \
//       5            15
//     /  \         /    \
//    2    5       13    22
//   /               \
//  1                14

// branchSums(tree) => [18, 20, 52, 47]
// 18 == 10 + 5 + 2 + 1
// 20 == 10 + 5 + 5
// 52 == 10 + 15 + 13 + 14
// 47 == 10 + 15 + 22

// O(n) time | O(n) space

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Solution 1

function branchSums1(root, arr = [], sum = 0) {
	sum += root.value;
  if (root.left) {
		branchSums(root.left, arr, sum);
	}
	if (root.right) {
		branchSums(root.right, arr, sum);
	}
	if (!root.left && !root.right) arr.push(sum);
	return arr;
}

// Solution 2 with helper function

function branchSums2(root) {
  const sums = [];
	calculateBranchSums(root, 0, sums);
	return sums;
}

function calculateBranchSums(node, runningSum, sums) {
	if (!node) return;
	const newRunningSum = runningSum + node.value;
	if (!node.left && !node.right) {
		sums.push(newRunningSum);
		return;
	}
	calculateBranchSums(node.left, newRunningSum, sums);
	calculateBranchSums(node.right, newRunningSum, sums);
}
