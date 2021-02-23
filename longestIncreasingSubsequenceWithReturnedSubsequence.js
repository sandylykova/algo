// AlgoExpert: Longest Increasing Sunsequence
// Difficulty: very hard

// Solution 1 O(n^2) time | O(n) space

function longestIncreasingSubsequence(array) {
	let n = array.length;
	let dp = new Array(n).fill(1);
	let seq = new Array(n).fill(null);
	let maxIdx = 0;
	for (let i = 0; i < n; i++) {
		let currNum = array[i];
		for (let j = 0; j < i; j++) {
			let otherNum = array[j];
			if (currNum > otherNum && dp[i] <= dp[j] + 1) {
				dp[i] = dp[j] + 1;
				seq[i] = j;
			}
		}
		if (dp[maxIdx] < dp[i]) maxIdx = i;
	}
	return buildSeq(array, seq, maxIdx);
}

function buildSeq(arr, seq, idx) {
	let res = [];
	while (idx !== null) {
		res.push(arr[idx]);
		idx = seq[idx];
	}
	return res.reverse();
}
