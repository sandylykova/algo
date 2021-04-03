// AlgoExpert: Shorten Path
// Difficulty: hard

// Solution 1 O(n) time | O(n) space, where n is the length of the path

function shortenPath(path) {
	let root = path[0] === '/' ? true : false;
	let pathArray = path.split('/');
	let meanFullPath = [];
	for (let el of pathArray) {
		if (el === '' || el === '.') continue;
		meanFullPath.push(el);
	}
	let stack = [];
	if (root) stack.push('');
	for (let i = 0; i < meanFullPath.length; i++) {
		if (meanFullPath[i] === '..') {
			if (stack.length === 0 || stack[stack.length - 1] === '..') {
				stack.push(meanFullPath[i]);
			} else if (stack[stack.length - 1] !== '') stack.pop();
		} else {
			stack.push(meanFullPath[i]);
		}
	}
	if (stack.length === 1 && stack[0] === '') return '/';
	let vals = stack.join('/');
	return vals;
}
