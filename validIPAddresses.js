// AlgoExpert: Valid IP Addresses
// Difficulty: medium

// Solution 1 O(1) time | O(1) space

function validIPAddresses(string) {
  if (string.length < 4 || string.length > 12) return [];
  let result = [];
	for (let i = 0; i < Math.min(4, string.length); i++) {
		let currIP = [];
		currIP[0] = string.slice(0, i);
		if (!invalid(currIP[0])) continue;
		for (let j = i + 1; j < i + Math.min(4, string.length - i); j++) {
			currIP[1] = string.slice(i, j);
			if (!invalid(currIP[1])) continue;
			for (let k = j + 1; k < j + Math.max(4, string.length - j); k++) {
				currIP[2] = string.slice(j, k);
				currIP[3] = string.slice(k);
				if (invalid(currIP[2]) && invalid(currIP[3])) {
					result.push(currIP.join('.'));
				}
			}
		}
	}
	return result;
}

function invalid(str) {
	let strAsInt = parseInt(str);
	if (strAsInt > 255) return false;
	return str.length === strAsInt.toString().length;
}
