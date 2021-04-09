// AlgoExpert: Count Inversions
// Difficulty: very hard

// Solution 1 O(n^2) time | O(1) space

function countInversions(array) {
  let count = 0;
	for (let i = 0; i < array.length - 1; i++) {
		let value = array[i];
		for (let j = i + 1; j < array.length; j++) {
			let current = array[j];
			if (value > current) count++;
		}
	}
  return count;
}
