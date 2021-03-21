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

// Solution 3 O(k * n) time | O(n) space, where k is the number of allowed steps and n is the height of the staircase

function staircaseTraversal(height, maxSteps) {
  let steps = new Array(height + 1).fill(0);
	steps[0] = 1;
	steps[1] = 1;
	for (let i = 2; i < steps.length; i++) {
		let step = 1;
		while (step <= maxSteps && step <= i) {
			steps[i] = steps[i] + steps[i - step];
			step += 1;
		}
	}
  return steps[height];
}

// Solution 4 O(k * n) time | O(n) space, where k is the number of allowed steps and n is the height of the staircase

function staircaseTraversal(height, maxSteps) {
	let waysToTop = new Array(height + 1).fill(0);
	waysToTop[0] = 1;
	for (let i = 1; i <= height; i++) {
		for (let j = 1; j <= maxSteps && i >= j; j++) {
			waysToTop[i] += waysToTop[i - j];
		}
	}
	return waysToTop[height];
}

