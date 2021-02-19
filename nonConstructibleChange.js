// AlgoExpert: Non-Constructible Change
// Difficulty: easy

// Solution O(nlog(n)) time | O(1) space

function nonConstructibleChange(coins) {
	coins.sort((a, b) => a - b);
	let minAmount = 0;
	for (let coin of coins) {
		if (coin > minAmount + 1) return minAmount + 1;
		minAmount += coin;
	}
	return minAmount + 1;
}
