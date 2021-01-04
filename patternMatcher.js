// You're given two non-empty strings. The first one is a pattern consisting of only 'x's and/or 'y's; the other one is a normal string of alphanumeric characters. Write a function that checks whether the normal string matches the pattern.

// A string S0  is said to match a pattern if replacing all 'x's in the pattern with some non-empty substring S1 of S0 and replacing all 'y's in the pattern with some non-empty substring S2 of S0 yields the same string S0.

// If the input string doesn't match the input pattern, the function should return an empty array; otherwise, it should return an array holding the strings S1 and S2 that represent 'x' and 'y' in the normal string, in that order. If the pattern doesn't contain any 'x's or 'y's, the respective letter should be represented by an empty string in the final array that you return.

// Solution O(n^2 + m) time | O(n + m) space, where n is the length of the main string and m is the length of the pattern

function patternMatcher(pattern, string) {
	if (pattern.length > string.length) return [];
  let newPattern = getNewPattern(pattern);
	let count = {'x': 0, 'y': 0};
	let firstYPosition = getCountAndFirstYPosition(count, newPattern);
	let didSwitch = newPattern[0] !== pattern[0];
	let len = string.length;
	if (count['y'] > 0) {
		for (let lenX = 1; lenX < len; lenX++) {
			let lenY = (len - lenX * count['x']) / count['y'];
			if (lenY <= 0 || lenY % 1 !== 0) continue;
			let yIdx = firstYPosition * lenX;
			let x = string.slice(0, lenX);
			let y = string.slice(yIdx, yIdx + lenY);
			let pottentialMatch = newPattern.map(char => (char === 'x' ? x : y));
			if (string === pottentialMatch.join('')) {
				return !didSwitch ? [x, y] : [y, x];
			}
		}
	} else {
		let lenX = len / count['x'];
		if (lenX % 1 === 0) {
			let x = string.slice(0, lenX);
			let pottentialMatch = newPattern.map(char => (char === 'x' ? x : ''));
			if (string === pottentialMatch.join('')) {
				return !didSwitch ? [x, ''] : ['', x];
			}
		}
	}
	return [];
}

function getNewPattern(pattern) {
	let newPattern = pattern.split('');
	if (newPattern[0] === 'x') return newPattern;
	return newPattern.map(char => char === 'x' ? 'y' : 'x');
}

function getCountAndFirstYPosition(count, pattern) {
	let firstIndex = null;
	for (let i = 0; i < pattern.length; i++) {
		count[pattern[i]]++;
		if (pattern[i] === 'y' && firstIndex === null) {
			firstIndex = i;
		}
	}
	return firstIndex;
}
