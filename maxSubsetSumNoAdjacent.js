// Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.

// Input: [75, 105, 120, 75, 90, 135]
// Output: 330 // 75 + 120 + 135

// Solution 1 O(n) time | O(n) space

function maxSubsetSumNoAdjacent(array) {
	if (!array.length) return 0;
	if (array.length === 1) return array[0];
  let result = [];
	result[0] = array[0];
	result[1] = Math.max(array[0], array[1]);
	for (let i = 2; i < array.length; i++) {
		result[i] = Math.max(result[i - 2] + array[i], result[i - 1]);
	}
	return result[result.length - 1];
}

// Solution 2 O(n) time | O(1) space

function maxSubsetSumNoAdjacent(array) {
	if (array.length === 0) return 0;
	if (array.length === 1) return array[0];
  let first = Math.max(array[0], array[1]);
	let second = array[0];
	for (let i = 2; i < array.length; i++) {
		let current = Math.max(first, second + array[i]);
		second = first;
		first = current;
	}
	return first;
}
