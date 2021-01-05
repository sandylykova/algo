// You're given an array of positive integers representing the prices of a single stock on various days (each index in the array represents a different day). You're also given an integer k, which represents the number of transactions you're allowed to make. One transaction consists of buying the stock on a given day and selling it on another, later day.

// Write a function that returns the maximum profit that you can make by buying and selling the stock, given k transactions.

// Note that you can only hold one share of the stock at a time; in other words, you can't buy more than one share of the stock on any given day, and you can't buy a share of the stock if you're still holding another share. Also, you don't need to use all k transactions that you're allowed.

// Solution 1 O(n*m) time | O(n*m) space

function maxProfitWithKTransactions(prices, k) {
	if (!prices.length) return 0;
  let profit = new Array(k + 1).fill(0).map(() => new Array(prices.length).fill(0));
	for (let i = 1; i < profit.length; i++) {
		let maxThusFar = -Infinity;
		for (let j = 1; j < profit[i].length; j++) {
			maxThusFar = Math.max(maxThusFar, -prices[j - 1] + profit[i - 1][j - 1]);
			profit[i][j] = Math.max(profit[i][j - 1], maxThusFar + prices[j]);
		}
	}
	return profit[k][prices.length - 1];
}

