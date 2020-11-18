// Write a function that takes in an array of integers and returns the length of the longest peak in the array.

// A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing.

// Solution 1 O(n) time | O(1) space

function longestPeak(array) {
	let currLength;
	let max = 0;
	for (let i = 1; i < array.length; i++) {
		let prev = array[i - 1];
		let curr = array[i];
		let next = array[i + 1];
		if (curr > prev && curr > next) {
			let leftIndex = i - 1;
			let rightIndex = i + 1;
			while (leftIndex > 0 && array[leftIndex] > array[leftIndex - 1]) leftIndex--;
			while (rightIndex < array.length && array[rightIndex] > array[rightIndex + 1]) rightIndex++;
			currLength = rightIndex - leftIndex + 1;
			max = Math.max(max, currLength);
		}
	}
	return max;
}
