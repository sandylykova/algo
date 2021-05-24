// AlgoExpert: Apartment Hunting
// Difficulty: very hard

// Solution 1 brute force O(n^3) time | O(m) space

function apartmentHunting(blocks, reqs) {
  let steps = Infinity;
	let idx = null;
	let reqsSet = new Set(reqs);
	for (let i = 0; i < blocks.length; i++) {
		let left = i - 1;
		let right = i + 1;
		let block = blocks[i];
		let minStep = -Infinity;
		for (let key in block) {
			if (reqsSet.has(key)) {
				if (block[key] === true) continue;
				else {
					let found = findClosestBlock(left, right, blocks, i, key);
					minStep = Math.max(minStep, found);
				}
			}
		}
		if (minStep < steps) {
			steps = minStep;
			idx = i;
		}
	}
	return idx;
}

function findClosestBlock(left, right, blocks, currIdx, req) {
	let foundLeft = false;
	let counterLeft = 0;
	while (left >= 0) {
		let block = blocks[left];
		counterLeft++;
		if (block[req] === true) {
			foundLeft = true;
			break;
		}
		left--;
	}
	let foundRight = false;
	let counterRight = 0;
	while (right < blocks.length) {
		let block = blocks[right];
		counterRight++;
		if (block[req] === true) {
			foundRight = true;
			break;
		}
		right++;
	}
	if (foundLeft === false && foundRight === false) return Math.max(counterLeft, counterRight);
	else if (foundLeft === false && foundRight === true) return counterRight;
	else if (foundLeft === true && foundRight === false) return counterLeft;
	else return Math.min(counterLeft, counterRight);
}
