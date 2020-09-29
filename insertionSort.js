// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

// Best: O(n) time | O(1) space - where n is the length of the input string;
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
		if (array[i - 1] > array[i]) {
			for (let j = i; j >= 0; j--) {
				if (array[j] < array[j - 1]) {
					[array[j - 1], array[j]] = [array[j], array[j - 1]]
				}
			}
		}
	}
	return array;
}
