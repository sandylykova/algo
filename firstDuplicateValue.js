// Given an array of integers between  1 ans null, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).

// In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.

// If no integer appears more than once, your function should return -1.

// Note that you're allowed to mutate the input array.

// Solution 1 O(n) time | O(n) space

function firstDuplicateValue(array) {
  let seen = new Set();
	for (let i = 0; i < array.length; i++) {
		if (seen.has(array[i])) return array[i];
		seen.add(array[i]);
	}
	return -1;
}

// Solution 2 O(n) time | O(1) space

function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i++) {
		let current = Math.abs(array[i]);
		if (array[current - 1] < 0) return Math.abs(array[i]);
		array[current - 1] *= -1;
	}
  return -1;
}
