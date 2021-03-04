// AlgoExpert: Balanced Brackets
// Difficulty: medium

// Solution 1 O(n) time | O(n) space

function balancedBrackets(string) {
	let obj = {
		')': '(',
		'}': '{',
		']': '['
	};
	let openning = new Set();
	openning.add('(');
	openning.add('{');
	openning.add('[');
	let closing = new Set();
	closing.add(')');
	closing.add('}');
	closing.add(']');
	let stack = [];
	for (let char of string) {
		if (openning.has(char)) stack.push(char);
		else if (closing.has(char)) {
			if (stack.length === 0) return false;
			let prev = stack[stack.length - 1];
			if (prev !== obj[char]) return false;
			else stack.pop();
		}
	}
	return stack.length === 0;
}
