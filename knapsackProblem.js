// You're given an array of arrays where each subarray holds two integer values and represents an item; the first integer is the item's value, and the second integer is the item's weight. You're also given an integer representing the maximum capacity of a knapsack that you have.

// Your goal is to fit items in your knapsack without having the sum of their weights exceed the knapsack's capacity, all the while maximizing their combined value. Note that you only have one of each item at your disposal.

// Write a function that returns the maximized combined value of the items that you should pick as well as an array of the indices of each item picked.

// If there are multiple combinations of items that maximize the total value in the knapsack, your function can return any of them.

// Input: items = [[1, 2], [4, 3], [5, 6], [6, 7]], capacity = 10
// Output: [10, [1, 3]]

// Solution 1 O(nc) time | O(nc) space, where c is the capacity, n is the number of items

function knapsackProblem(items, capacity) {
  let matrix = [];
	for (let i = 0; i < items.length + 1; i++) {
		const row = new Array(capacity + 1).fill(0);
		matrix.push(row);
	}
	for (let i = 1; i < items.length + 1; i++) {
		let currWeight = items[i - 1][1];
		let currValue = items[i - 1][0];
		for (let j = 0; j < capacity + 1; j++) {
			if (currWeight > j) {
				matrix[i][j] = matrix[i - 1][j];
			} else {
				matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i - 1][j - currWeight] + currValue);
			}
		}
	}
	return [matrix[items.length][capacity], getKnapsackItems(matrix, items)];
}

function getKnapsackItems(matrix, items) {
	const sequence = [];
	let i = matrix.length - 1;
	let c = matrix[0].length - 1;
	while (i > 0) {
		if (matrix[i][c] === matrix[i - 1][c]) {
			i -= 1;
		} else {
			sequence.push(i - 1);
			c -= items[i - 1][1];
			i -= 1;
		}
		if (c === 0) break;
	}
	return sequence;
}
