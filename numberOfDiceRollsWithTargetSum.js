// 1155. Number of Dice Rolls With Target Sum

// You have d dice, and each die has f faces numbered 1, 2, ..., f.

// Return the number of possible ways (out of fd total ways) modulo 10^9 + 7 to roll the dice so the sum of the face up numbers equals target.

// Input: d = 2, f = 6, target = 7
// Output: 6
// Explanation:
// You throw two dice, each with 6 faces. There are 6 ways to get a sum of 7:
// 1+6, 2+5, 3+4, 4+3, 5+2, 6+1.

// Solution 1

var numRollsToTarget = function(d, f, target) {
  let numberOfWays = new Array(d + 1).fill(0).map(() => new Array(target + 1).fill(0));
  let MOD = Math.pow(10, 9) + 7;
  numberOfWays[0][0] = 1;
  for (let i = 1; i <= d; i++) {
      for (let j = 1; j <= target; j++) {
          for (let k = 1; k <= f; k++) {
              if (j >= k) {
                  numberOfWays[i][j] = (numberOfWays[i][j] + numberOfWays[i - 1][j - k]) % MOD;
              } else break;
          }
      }
  }
  return numberOfWays[d][target];
};
