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
