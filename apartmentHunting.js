// AlgoExpert: Apartment Hunting
// Difficulty: very hard

// Solution 1 brute force O(n^2*m) time | O(m) space, where r is the number of the reqs, n is the number of the blocks

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

// Solution 2 O(m*n) time | O(m*n) space, where r is the number of the reqs, n is the number of the blocks

function apartmentHunting(blocks, reqs) {
	let leftSide = [];
	let rightSide = [];
	let reqsSet = new Set(reqs);
	for (let i = 0; i < blocks.length; i++) {
		let currentBlock = blocks[i];
		let currentValues = [];
		let idx = 0;
		for (let req in currentBlock) {
			if (!reqsSet.has(req)) continue;
			if (i === 0) {
				if (reqsSet.has(req)  && currentBlock[req] === true) {
					currentValues[idx] = 0;
				} else {
					currentValues[idx] = Infinity;
				}
			} else {
				let prevBlock = leftSide[i - 1];
				if (reqsSet.has(req) && currentBlock[req] === true) {
					currentValues[idx] = 0;
				} else if (prevBlock[idx] === Infinity) {
					currentValues[idx] = Infinity;
				} else {
					currentValues[idx] = prevBlock[idx] + 1;
				}
			}
			idx++;
		}
		leftSide.push(currentValues);
	}
	for (let i = blocks.length - 1; i >= 0; i--) {
		let currentBlock = blocks[i];
		let currentValues = [];
		let idx = 0;
		for (let req in currentBlock) {
			if (!reqsSet.has(req)) continue;
			if (i === blocks.length - 1) {
				if (reqsSet.has(req) && currentBlock[req] === true) {
					currentValues[idx]  = 0;
				} else {
					currentValues[idx] = Infinity;
				}
			} else {
				let prevBlock = rightSide[i + 1];
				if (reqsSet.has(req) && currentBlock[req] === true) {
					currentValues[idx] = 0;
				} else if (prevBlock[idx] === Infinity) {
					currentValues[idx] = Infinity;
				} else {
					currentValues[idx] = prevBlock[idx] + 1;
				}
			}
			idx++;
			rightSide[i] = currentValues;
		}
	}
	let idx = null;
	let minSteps = Infinity;
	for (let i = 0; i < blocks.length; i++) {
		let currLeft = leftSide[i];
		let currRight = rightSide[i];
		let currMin = -Infinity;
		let currSteps = -Infinity;
		for (let j = 0; j < reqs.length; j++) {
			currMin = Math.min(currLeft[j], currRight[j]);
			currSteps = Math.max(currSteps, currMin);
		}
		if (currSteps < minSteps) {
			minSteps = currSteps;
			idx = i;
		}
	}
	return idx;
}
