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

// Solution 2 O(k * n) time | O(n) space, where k is the number of allowed steps and n is the height of the staircase

function staircaseTraversal(height, maxSteps) {
	let memo = new Map();
	memo.set(0, 1);
	memo.set(1, 1);
  return numberOfWaysToTop(height, maxSteps, memo);
}

function numberOfWaysToTop(height, maxSteps, memo) {
	if (memo.has(height)) return memo.get(height);
	let numberOfWays = 0;
	for (let i = 1; i <= Math.min(height, maxSteps); i++) {
		numberOfWays += numberOfWaysToTop(height - i, maxSteps, memo);
	}
	memo.set(height, numberOfWays);
	return numberOfWays;
}
