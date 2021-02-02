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

// Solution 2 O(log(n)) time | O(1) space

function indexEqualsValue(array) {
  let left = 0;
	let right = array.length - 1;
	while (left <= right) {
		let midIdx = Math.floor((left + right) / 2);
		let midValue = array[midIdx];
		if (midValue < midIdx) {
			left = midIdx + 1;
		} else if (midIdx === 0 && midValue === midIdx) {
			return 0;
		} else if (midValue === midIdx && array[midIdx - 1] < midValue - 1) {
			return midIdx;
		} else {
			right = midIdx - 1;
		}
	}
	return -1;
}

