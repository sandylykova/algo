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

// Solution 2 similar to solution 1

function longestPalindromicSubstring(string) {
	let maxLength = 0;
	let maxString = '';
	let currLength = 0;
	let currString = '';
	for (let i = 0; i < string.length; i++) {
		let isPalindrome1 = checkPalindrome(i, string, true);
		let isPalindrome2 = checkPalindrome(i, string, false);
		isPalindrome1.length > isPalindrome2.length ? currLength = isPalindrome1.length : currLength = isPalindrome2.length;
		isPalindrome1.length > isPalindrome2.length ? currString = isPalindrome1 : currString = isPalindrome2;
		if (maxLength < currLength) {
			maxLength = currLength;
			maxString = currString;
		}
	}
	return maxString;
}

function checkPalindrome(center, string, isAround) {
	let left, right;
	if (isAround) {
		left = center - 1;
		right = center + 1;
	} else {
		left = center;
		right = center + 1;
	}
	while (left >= 0 && right < string.length && string[left] === string[right]) {
		left--;
		right++;
	}
	let returned = string.slice(left + 1, right);
	return returned;
}

