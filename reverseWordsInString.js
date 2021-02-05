// AlgoExpert: Reverse Words In String
// Difficulty: medium

// Solution 1 O(n) time | O(n) space

function reverseWordsInString(string) {
	let allWords = [];
	let i = 0;
	while (i < string.length) {
		let currWords = [];
		let currSpaces = [];
		while (string[i] !== ' ' && i < string.length) {
			currWords.push(string[i]);
			i++;
		}
		if (currWords.length > 0) allWords.push(currWords);
		while (string[i] === ' ' && i < string.length) {
			currSpaces.push(' ');
			i++;
		}
		if (currSpaces.length > 0) allWords.push(currSpaces);
	}
	let left = 0;
	let right = allWords.length - 1;
	while (left < right) {
		swap(left, right, allWords);
		left++;
		right--;
	}
	let ans = [];
	for (let word of allWords) {
		let curr = word.join('');
		ans.push(curr);
	}
	return ans.join('');
}
function swap(i, j, arr) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
