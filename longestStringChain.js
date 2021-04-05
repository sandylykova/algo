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

// Solution 2 with dp table but returned value is just max length

var longestStrChain = function(words) {
  words.sort((a, b) => a.length - b.length);
  let dp = new Map();
  let max = 0;
  for (let word of words) {
      let best = 0;
      for (let i = 0; i < word.length; i++) {
          let substr = word.slice(0, i) + word.slice(i + 1);
          best = Math.max(dp.get(substr) + 1 || 1, best);
      }
      dp.set(word, best);
      max = Math.max(max, best);
  }
  return max;
};
