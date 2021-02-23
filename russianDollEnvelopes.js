// 354. Russian Doll Envelopes

// You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

// What is the maximum number of envelopes can you Russian doll? (put one inside other)

// Note:
// Rotation is not allowed.

// Input: [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

// Solution 1 O(nlog(n)) time | O(n) space

var maxEnvelopes = function(envelopes) {
  envelopes.sort((a, b) => {
      if (a[0] === b[0]) return b[1] - a[1];
      return a[0] - b[0];
  });
  let n = envelopes.length;
  let dp = new Array(n).fill(1);
  let max = 0;
  for (let i = 0; i < n; i++) {
      let curr = envelopes[i];
      for (let k = 0; k < i; k++) {
          if (envelopes[k][1] < curr[1]) {
              dp[i] = Math.max(dp[i], dp[k] + 1);
          }
      }
      max = Math.max(max, dp[i]);
  }
  return max;
};
