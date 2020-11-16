// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Solution 1

var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  let curr;
  for (let i = 1; i <= amount; i++) {
      for (let j = 0; j < coins.length; j++) {
          let diff = i - coins[j];
          if (diff >= 0) {
              curr = 1 + dp[diff];
              dp[i] = Math.min(dp[i], curr);
          }
      }
  }
  return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
