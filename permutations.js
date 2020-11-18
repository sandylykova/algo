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

// Solution 2

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
