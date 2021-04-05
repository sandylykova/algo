// AlgoExpert: Longest String Chain
// Difficulty: very hard

// Solution 1

function longestStringChain(strings) {
	let set = new Set(strings);
	let seen = new Set();
	strings.sort((a, b) => b.length - a.length);
	let chain = [];
	function traverse(current, count) {
		seen.add(current);
		if (chain.length < count.length) {
			chain = count.slice();
		}
		for (let i = 0; i < current.length; i++) {
			let substring = current.slice(0, i) + current.slice(i + 1);
			if (set.has(substring)) {
				let newCount = count.concat(substring);
				traverse(substring, newCount);
			}
		}
	}
	for (let string of strings) {
		if (!seen.has(string)) {
			traverse(string, [string]);
		}
	}
	return chain.length === 1 ? [] : chain;
}
