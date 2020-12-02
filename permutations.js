// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// Solution O(n * !n) time | O(n * !n) space

var permute = function(nums, set = [], answers = []) {
  if (!nums.length) answers.push([...set]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => index !== i);
    set.push(nums[i]);
    permute(newNums, set, answers);
    set.pop();
  }
  return answers;
};

// Solution 2 O(n! * n^2) time | O(n! * n) space

function getPermutations(array) {
	let result = [];
	let len = array.length;
	if (len === 0) return result;
	function traverse(array, currPerm) {
		if (array.length === 0 && currPerm.length === len) {
			result.push(currPerm);
		} else {
			for (let i = 0; i < array.length; i++) {
			let newArray = array.slice(0, i).concat(array.slice(i + 1));
			let newPermutation = currPerm.concat(array[i]);
			traverse(newArray, newPermutation);
			}
		}
	}
	traverse(array, []);
	return result;
}

// Solution 3 O(n! * n) time | O(n! * n) space

function swap(i, j, array) {
	[array[i], array[j]] = [array[j], array[i]];
}

function getPermutations(array) {
	let result = [];
	function traverse(i, array) {
		if (i === array.length - 1) {
			result.push(array.slice());
		} else {
			for (let j = i; j < array.length; j++) {
				swap(i, j, array);
				traverse(i + 1, array);
				swap(i, j, array);
			}
		}
	}
	traverse(0, array);
	return result;
}
