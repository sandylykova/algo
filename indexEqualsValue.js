// AlgoExpert: Index Equals Value
// Difficulty: hard

// Write a function that takes in a sorted array of distinct integers and returns the first index in the array that is equal to the value at that index. In other words, your function should return the minimum index where index == array[index].

// If there is no such index, your function should return -1.

// array = [-5, -3, 0, 3, 4, 5, 9]
// output = 3

// Solution 1 O(n) time | O(1) space

function indexEqualsValue(array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === i) {
			return i;
		}
	}
	return -1;
}
