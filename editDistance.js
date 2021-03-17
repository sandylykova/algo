// 72. Edit Distance

// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Solution 1 O(n*m) time | O(n*m) space - where n is the length of word2, m is the length of word1

var minDistance = function(word1, word2) {
  let dp = new Array(word2.length + 1).fill(0).map(() => new Array(word1.length + 1).fill(0));
  for (let i = 0; i < word2.length + 1; i++) {
      for (let j = 0; j < word1.length + 1; j++) {
          if (i === 0 && j === 0) {
              dp[i][j] = 0;
          } else if (i === 0 && j > 0) {
              dp[i][j] = dp[i][j - 1] + 1;
          } else if (j === 0 && i > 0) {
              dp[i][j] = dp[i - 1][j] + 1;
          } else if (word2[i - 1] === word1[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
          }
      }
  }
  return dp[word2.length][word1.length];
};
