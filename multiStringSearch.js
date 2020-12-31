// Write a function that takes in a big string and an array of small strings, all of which are smaller in length than the big string. The function should return an array of booleans, where each boolean represents whether the small string at that index in the array of small strings is contained in the big string.

// Note that you can't use language-built-in string-matching methods.

// Example 1:

// bigString = 'this is a big string'
// smallString = ['this', 'yo', 'is', 'a']

// Output: [true, false, true, true]

// Solution 1

function multiStringSearch(bigString, smallStrings) {
	let result = [];
  for (let i = 0; i < smallStrings.length; i++) {
		let found = check(smallStrings[i], bigString);
		if (found) {
			result.push(true);
		} else {
			result.push(false);
		}
	}
	return result;
}

function check(target, string) {
	let len = target.length;
	let index = 0;
	for ( let i = 0; i < string.length; i++) {
		let prev = i;
		while (index < len && i < string.length && string[i] === target[index])  {
			index++;
			i++;
		}
		if (index === len) return true;
		i = prev;
		index = 0;
	}
	return false;
}
