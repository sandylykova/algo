// 518. Coin Change II

// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// Solution 1

var change = function(amount, coins) {
  let ways = new Array(amount + 1).fill(0);
  ways[0] = 1;
  for (let coin of coins) {
      for (let i = 1; i <= amount; i++) {
          if (coin <= i) {
              ways[i] += ways[i - coin];
          }
      }
  }
  return ways[ways.length - 1];
};
