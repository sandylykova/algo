// AlgoExpert: Kadane's Algorithm
// Difficulty: medium

// Solution 1 O(n) time | O(1) space - where n is the length of the input array

function kadanesAlgorithm(array) {
	let maxSoFar = array[0];
  let max = array[0];
	for (let i = 1; i < array.length; i++) {
		let curr = array[i];
		if (curr + max > curr) {
			max += curr;
		} else {
			max = array[i];
		}
		maxSoFar = Math.max(maxSoFar, max);
	}
	return maxSoFar;
}
