// AlgoExpert: Generate Document
// Difficulty: easy

// Solution O(n + m) time | O(c) space - where n is the length of characters, m is the length of document, c is the number of unique characters in characters string

function generateDocument(characters, document) {
	let map = new Map();
  for (let char of characters) {
		map.set(char, map.get(char) + 1 || 1);
	}
	for (let char of document) {
		if (map.has(char)) {
			map.set(char, map.get(char) - 1);
			if (map.get(char) === 0) map.delete(char);
		} else {
			return false;
		}
	}
  return true;
}
