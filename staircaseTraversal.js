// AlgoExpert: Staircase Traversal
// Difficulty: medium

// Solution 1

function staircaseTraversal(height, maxSteps) {
	let steps = [];
	for (let i = 1; i <= maxSteps; i++) {
		steps.push(i);
	}
	let count = 0;
	function backtrack(curr) {
		if (curr > height) return;
		if (curr === height) {
			count++;
			return;
		}
		for (let i = 0; i < steps.length; i++) {
			curr += steps[i];
			backtrack(curr);
			curr -= steps[i];
		}
	}
	backtrack(0);
  return count;
}
