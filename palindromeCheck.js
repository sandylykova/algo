// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome. A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
// isPalindrome('abcdcba') => true;

// O(n) time | O(1) space

function isPalindrome(string) {
	if (string.length === 1) return true;
  let firstPointer = 0;
	let secondPointer = string.length - 1;
	while (firstPointer <= secondPointer) {
		if (string[firstPointer] !== string[secondPointer]) {
			return false;
		}
		firstPointer++;
		secondPointer--;
	}
	return true;
}

