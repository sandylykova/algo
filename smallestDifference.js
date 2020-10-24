// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// You can assume that there will only be one pair of numbers with the smallest
// difference.

// Sample Input:

// a1 = [-1, 5, 10, 20, 28, 3]
// a2 = [26, 134, 135, 15, 17]

// Output: [28, 26]

// Solution 1 O(n^2) time | O(1) space

function smallestDifference(arrayOne, arrayTwo) {
	let smallestDif = Infinity;
	let arr = [];
  for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			let dif = Math.abs(arrayOne[i] - arrayTwo[j]);
			if (smallestDif > dif) {
				smallestDif = dif;
				arr = [arrayOne[i], arrayTwo[j]];
			}
		}
	}
	return arr;
}

// Solution 2 O(nlog(n) + mlog(m)) time | O(1) space

function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let p1 = 0;
	let p2 = 0;
	let minDif = Infinity;
	let returnedVals;
	while (p1 < arrayOne.length && p2 < arrayTwo.length) {
		let dif = Math.abs(arrayOne[p1] - arrayTwo[p2]);
		if (dif === 0) return [arrayOne[p1], arrayTwo[p2]];
		if (dif < minDif) {
			minDif = dif;
			returnedVals = [arrayOne[p1], arrayTwo[p2]];
		}
		if (arrayOne[p1] < arrayTwo[p2]) p1++;
		else p2++;
	}
	return returnedVals;
}
