// Given an array of positive integers representing coin denominations and a single non-negative integer n  representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that target amount using the given coin denominations. Note that you have access to an unlimited amount of coins. If it's impossible to make change for the target amount, return -1.

// Solution 1 O(n*d) time | O(n) space, where n is the target amount, d is the number of coin denominations

function minNumberOfCoinsForChange(n, denoms) {
	let arrayOfCoins = new Array(n + 1).fill(Infinity);
	arrayOfCoins[0] = 0;
  for (let denom of denoms) {
		for (let i = 1; i <= n; i++) {
			if (denom <= i) {
				arrayOfCoins[i] = Math.min(arrayOfCoins[i], arrayOfCoins[i - denom] + 1);
			}
		}
	}
	return arrayOfCoins[n] === Infinity ? -1 : arrayOfCoins[n];
}

// Solution 2 O(n*d) time | O(n*d) space

function minNumberOfCoinsForChange(n, denoms) {
	let dp = new Array(denoms.length + 1).fill(Infinity).map(() => new Array(n + 1).fill(Infinity));
	dp[0][0] = 0;
	for (let i = 1; i < dp.length; i++) {
		let denom = denoms[i - 1];
		for (let j = 0; j < dp[i].length; j++) {
			if (j === 0) dp[i][j] = 0;
			else if (j < denom) {
				dp[i][j] = dp[i - 1][j];
			} else {
				dp[i][j] = Math.min(1 + dp[i][j - denom], dp[i - 1][j]);
			}
		}
	}
	return dp[denoms.length][n] === Infinity ? -1 : dp[denoms.length][n];
}
