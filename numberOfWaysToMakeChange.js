// Given an array of distinct positive integers representing coin denominations and a single non-negative integer n representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations.

// Input: n = 6, denoms = [1, 5]
// Output: 2 // 1x1 and 6x1

// Solution 1 O(n*d) time | O(n) space, where n is the target amount, d is the number of coin denominations

function numberOfWaysToMakeChange(n, denoms) {
	if (n === 0) return 1;
	let ways = new Array(n + 1).fill(0);
	ways[0] = 1;
  for (let denom of denoms) {
		for (let i = 1; i <= n; i++) {
			if (denom <= i) {
				ways[i] += ways[i - denom];
			}
		}
	}
	return ways[n];
}
