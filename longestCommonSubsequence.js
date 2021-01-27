// AlgoExpert: Longest Common Subsequence
// Difficulty: hard

// Write a function that takes in two strings and returns their longest common subsequence.

// A subsequence of a string is a set of characters that aren't necessarily adjacent in the string but that are in the same order as they appear in the string. For instance, the characters  ['a', 'b', 'd'] form a subsequence of the string 'abcd', and so do the characters ['b', 'd']. Note that a single character in a string and the string itself are both valid subsequences of the string.

// You can assume that there will only be one longest common subsequence.

// Solution 1 O(mn*min(m, n)) time | O(mn*min(m, n)) space

function longestCommonSubsequence(str1, str2) {
	if (str1.length === 0 || str2.length === 0) return [];
  let lcs = new Array(str2.length + 1).fill([]).map(() => new Array(str1.length + 1).fill([]));
	for (let i = 1; i < lcs.length; i++) {
		for (let j = 1; j < lcs[i].length; j++) {
			if (str2[i - 1] === str1[j - 1]) {
				lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
			} else {
				lcs[i][j] = lcs[i - 1][j].length > lcs[i][j - 1].length ? lcs[i - 1][j] : lcs[i][j - 1];
			}
		}
	}
	return lcs[str2.length][str1.length];
}

// Solution 2 O(nm) time | O(nm) space

function longestCommonSubsequence(str1, str2) {
	let lcs = new Array(str2.length + 1).fill([null, 0, null, null]).map(() => new Array(str1.length + 1).fill([null, 0, null, null]));
	findLongestCommonSubsequence(lcs, str1, str2);
	return builtResult(lcs);
}
function builtResult(lcs) {
	let ans = [];
	let i = lcs.length - 1;
	let j = lcs[0].length - 1;
	while (i !== 0 && j !== 0) {
		let currentEntry = lcs[i][j];
		if (currentEntry[0]) {
			ans.push(currentEntry[0]);
		}
		i = currentEntry[2];
		j = currentEntry[3];
	}
	return ans.reverse();
}
function findLongestCommonSubsequence(lcs, str1, str2) {
	for (let i = 1; i < str2.length + 1; i++) {
		for (let j = 1; j < str1.length + 1; j++) {
			if (str2[i - 1] === str1[j - 1]) {
				let prev = lcs[i - 1][j - 1];
				lcs[i][j] = [str2[i - 1], prev[1] + 1, i - 1, j - 1];
			} else {
				let up = lcs[i - 1][j];
				let left = lcs[i][j - 1];
				if (up[1] > left[1]) {
					lcs[i][j] = [null, up[1], i - 1, j];
				} else {
					lcs[i][j] = [null, left[1], i, j - 1];
				}
			}
		}
	}
}
