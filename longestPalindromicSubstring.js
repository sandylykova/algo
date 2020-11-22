// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Solution 1 expand around center

function longestPalindromicSubstring(string) {
	let longest = '';
  for (let i = 0; i < string.length; i++) {
		let str1 = helperCheckFunction(string, i, i);
		let str2 = helperCheckFunction(string, i, i + 1);
		if (str1.length > longest.length) {
			longest = str1;
		}
		if (str2.length > longest.length) {
			longest = str2;
		}
	}
	return longest;
}

function helperCheckFunction(string, left, right) {
	while (left >= 0 && right < string.length && string[left] === string[right]) {
		right++;
		left--;
	}
	return string.slice(left + 1, right);
}
