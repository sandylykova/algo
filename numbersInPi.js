// AlgoExpert: Numbers in Pi
// Difficulty: hard

// Given a string representation of the first n digits of Pi and a list of positive integers (all in string format), write a function that returns the smallest number of spaces that can be added to the n digits of Pi such that all resulting numbers are found in the list of integers.

// Note that a single number can appear multiple times in the resulting numbers. For example, if Pi is "3141" and the numbers are ["1", "3", "4"], the number "1" is allowed to appear twice in the list of resulting numbers after three spaces are added: "3 | 1 | 4 | 1".

// If no number of spaces to be added exists such that all resulting numbers are found in the list of integers, the function should return -1.

// Solution 1

function numbersInPi(pi, numbers) {
	let numberMap = new Set(numbers);
	let minNumberOfSpaces = Infinity;
	let found = false;
	function backtrack(pi, curr) {
		if (pi.length === 0) {
			found = true;
			return curr.length - 1;
		}
		for (let i = 0; i < pi.length; i++) {
			let currStr = pi.slice(0, i + 1);
			if (numberMap.has(currStr)) {
				let remaining = pi.slice(i + 1);
				let newCurr = curr.concat(currStr);
				let numOfSpaces = backtrack(remaining, newCurr);
				minNumberOfSpaces = Math.min(minNumberOfSpaces, numOfSpaces);
			}
		}
		return Infinity;
	}
	backtrack(pi, []);
	return found === false ? -1 : minNumberOfSpaces;
}
