// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold. If no three numbers sum up to the target sum, the function should return an empty array.

// Soltion 1
// O(n^2) time | O(n) space

function threeNumberSum1(array, targetSum) {
  array.sort((a, b) => a - b);
	let returned = [];
	let current = 0;
	let left = current + 1;
	let right = array.length - 1;
	while (current < array.length && left < array.length && right < array.length) {
		let sum = array[left] + array[current] + array[right];
		if (left === right || right < left) {
      current++;
      left = current + 1;
      right = array.length - 1;
    } else if (sum < targetSum) {
			left++;
		} else if (sum > targetSum) {
			right--;
		} else if (sum === targetSum) {
			returned.push([array[current], array[left], array[right]])
      left++;
      right--;
		}
	}
	return returned;
}

// Solution 2

// O(n^3) time | O(n)

function threeNumberSum2(array, targetSum) {
	array.sort((a, b) => a - b);
	let returnedArr = [];
  for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			for (let k = j + 1; k < array.length; k++) {
				if (array[i]+array[j]+array[k] === targetSum) {
					returnedArr.push([array[i], array[j], array[k]]);
				}
			}
		}
	}
	return returnedArr;
}
