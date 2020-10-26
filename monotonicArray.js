// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

// Solution 1 O(n) time | O(1) space

function isMonotonic(array) {
	if (array.length <= 2) return true;
	let p1 = 0;
	let p2 = p1 + 1;
	while (array[p1] === array[p2]) {
		p1++;
		p2++;
	}
	if (p2 === array.length) return true;
  let dif = array[p1] - array[p2];
	let counter = 0;
	if (dif > 0) {
		let i = 0;
		let j = i + 1;
		while (array[i] >= array[j] && j < array.length) {
			i++;
			j++;
			counter++;
		}
	}
	if (dif < 0) {
		let i = 0;
		let j = i + 1;
		while (array[i] <= array[j] && j < array.length) {
			i++;
			j++;
			counter++;
		}
	}
	return counter === array.length - 1;
}

// Solution 2 O(n) time | O(1) space



