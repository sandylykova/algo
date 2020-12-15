// Write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted (in ascending order).

// If the input array is already sorted, the function should return [-1, -1].

// Solution 1 O(n) time | O(1) space

function subarraySort(array) {
	let minOutOfOrder = Infinity;
	let maxOutOfOrder = -Infinity;
	for (let i = 0; i < array.length; i++) {
		if (isOutOfOrder(i, array[i], array)) {
			minOutOfOrder = Math.min(minOutOfOrder, array[i]);
			maxOutOfOrder = Math.max(maxOutOfOrder, array[i]);
		}
	}
	if (minOutOfOrder === Infinity) return [-1, -1];
	let start = 0;
	while (array[start] <= minOutOfOrder) start++;
	let end = array.length - 1;
	while (array[end] >= maxOutOfOrder) end--;
	return [start, end];
}

function isOutOfOrder(i, num, array) {
	if (i === 0) {
		return num > array[i + 1];
	} else if (i === array.length - 1) {
		return array[i] < array[i - 1];
	} else {
		return num > array[i + 1] || array[i] < array[i - 1];
	}
}