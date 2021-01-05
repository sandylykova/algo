// 123. Best Time to Buy and Sell Stock III

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most two transactions.

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

// Solution 1

var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let profit = new Array(3).fill(0).map(() => new Array(prices.length).fill(0));
  let max = 0;
  for (let i = 1; i < 3; i++) {
      let maxThusFar = -Infinity;
      for (let j = 1; j < prices.length; j++) {
          maxThusFar = Math.max(profit[i - 1][j - 1] - prices[j - 1], maxThusFar);
          profit[i][j] = Math.max(maxThusFar + prices[j], profit[i][j - 1]);
          max = Math.max(max, profit[i][j]);
      }
  }
  return max;
};
