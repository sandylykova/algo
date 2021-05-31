// AlgoExpert: Longest Balanced Substring
// Difficulty: very hard

// Solution 1 O(n) time | O(1) space

function longestBalancedSubstring(string) {
	let openingCount = 0;
	let closingCount = 0;
	let maxLength = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === '(') openingCount++;
		else {
			closingCount++;
		}
		if (closingCount === openingCount) {
			maxLength = Math.max(maxLength, closingCount * 2);
		} else if (closingCount > openingCount) {
			closingCount = 0;
			openingCount = 0;
		}
	}

	closingCount = 0;
	openingCount = 0;

	for (let i = string.length - 1; i >= 0; i--) {
		if (string[i] === ')') closingCount++;
		else {
			openingCount++;
		}
		if (closingCount === openingCount) {
			maxLength = Math.max(maxLength, openingCount * 2);
		} else if (openingCount > closingCount) {
			closingCount = 0;
			openingCount = 0;
		}
	}
	return maxLength;
}
