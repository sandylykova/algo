// Write a function that takes in an array of integers and returns a sorted version of that array. Use the Bubble Sort algorithm to sort the array.

// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space

function bubbleSort1(array) {
  let sorted = false;
	let counter = 0;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i+1]) {
				swap(i, i+1, array);
				sorted = false;
			}
		}
		counter++;
	}
	return array;
}

function swap(i, j, array) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// Solution 2 without helper function

function bubbleSort2(array) {
  let sorted = false;
	let counter = 0;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length - 1 - counter; i++) {
			if (array[i] > array[i+1]) {
				[array[i], array[i+1]] = [array[i+1], array[i]];
				sorted = false;
			}
		}
		counter++;
	}
	return array;
}
