// AlgoExpert: Powerset
// Difficulty: medium

// Solution 1 with backtracking

function powerset(array) {
  let result = [];
	function traverse(curr, index) {
		result.push(curr.slice());
		for (let i = index; i < array.length; i++) {
			curr.push(array[i]);
			traverse(curr, i + 1);
			curr.pop();
		}
	}
	traverse([], 0);
	return result;
}

// Solution 2 O(n*2^n) time | O(n*2^n) space

function powerset(array) {
  let subsets = [[]];
	for (let ele of array) {
		let length = subsets.length;
		for (let i = 0; i < length; i++) {
			let currSubset = subsets[i];
			subsets.push(currSubset.concat(ele));
		}
	}
	return subsets;
}
