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
