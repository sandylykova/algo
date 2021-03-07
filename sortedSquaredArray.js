// AlgoExpert: Sorted Squared Array
// Difficulty: easy

// Solution 1 O(n) time | O(n) space

function sortedSquaredArray(array) {
	let res = new Array(array.length);
	let small = 0;
	let large = array.length - 1;
	let idx = array.length - 1;
  while (small <= large) {
		let smallSquare = array[small] * array[small];
		let largeSquare = array[large] * array[large];
		if (smallSquare > largeSquare) {
			res[idx] = smallSquare;
			small++;
		} else {
			res[idx] = largeSquare;
			large--;
		}
		idx--;
	}
  return res;
}

