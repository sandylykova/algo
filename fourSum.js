// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.
// If no four numbers sum up to the target sum, the function should return an empty array.

// Solution 1 O(n^4) time | O(n^2) space

function fourNumberSum(array, targetSum) {
  let ans = [];
	for (let i = 0; i <= array.length - 4; i++) {
		for (let j = i + 1; j <= array.length - 3; j++) {
			for (let k = j + 1; k <= array.length - 2; k++) {
				for (let c = k + 1; c <= array.length - 1; c++) {
					if (array[i] + array[k] + array[j] + array[c] === targetSum) {
						ans.push([array[i], array[k], array[j], array[c]]);
					}
				}
			}
		}
	}
	return ans;
}

// Solution 2 O(n^2) time | O(n^2) space
