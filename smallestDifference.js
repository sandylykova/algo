Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

You can assume that there will only be one pair of numbers with the smallest
difference.

Sample Input:

a1 = [-1, 5, 10, 20, 28, 3]
a2 = [26, 134, 135, 15, 17]

Output: [28, 26]

// Solution 1 O(n^2) time | O(1) space

function smallestDifference(arrayOne, arrayTwo) {
	let smallestDif = Infinity;
	let arr = [];
  for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			let dif = Math.abs(arrayOne[i] - arrayTwo[j]);
			if (smallestDif > dif) {
				smallestDif = dif;
				arr = [arrayOne[i], arrayTwo[j]]
			}
		}
	}
	return arr;
}

// Solution 2 O(n) time | O() space
