// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.

// array = [5, 1, 22, 25, 6, -1, 8, 10];
// subsequence = [1, 6, -1, 10];
// isValidSubsequence(array, subsequence);

// O(n) time | O(1) space

function isValidSubsequence(array, sequence) {
	if (sequence.length > array.length) return false;
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
    if (counter === array.length) break;
		if (array[i] === sequence[counter]) counter++;
	}
	return counter === sequence.length;
}
