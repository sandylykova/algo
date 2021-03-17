// AlgoExpert: Levenshtein Distance
// Difficulty: medium

// Solution 1 O(n*m) time | O(n*m) space - where n is the length of str2, m is the length of word1

function levenshteinDistance(str1, str2) {
  let dp = new Array(str2.length + 1).fill(0).map(() => new Array(str1.length + 1).fill(0));
	for (let i = 0; i <= str2.length; i++) {
		for (let j = 0; j <= str1.length; j++) {
			if (i === 0) {
				dp[i][j] = j;
			} else if (j === 0) {
				dp[i][j] = i;
			} else if (str2[i - 1] === str1[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1];
			} else {
				dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
			}
		}
	}
	return dp[str2.length][str1.length];
}
