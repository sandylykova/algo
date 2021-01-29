// AlgoExpert: Disk Stacking
// Difficulty: hard

// You're given a non-empty array of arrays where each subarray holds three integers and represents a disk. These integers denote each disk's width, depth, and height, respectively. Your goal is to stack up the disks and to maximize the total height of the stack. A disk must have a strictly smaller width, depth, and height than any other disk below it.

// Write a function that returns an array of the disks in the final stack, starting with the top disk and ending with the bottom disk. Note that you can't rotate disks; in other words, the integers in each subarray must represent [width, depth, height] at all TimeRanges.

// You can assume that there will only be one stack with the greatest total height.

// Solution 1 O(n^2) time | O(1) space

function diskStacking(disks) {
	if (disks.length === 1 || !disks.length) return disks;
	let maxHeight = 0;
	let maxDisks = [];
	disks.sort((a, b) => a[0] - b[0]);
	for (let i = 0; i < disks.length; i++) {
		let combo = [disks[i]];
		let height = backtrack(i, combo, disks[i][2]);
		if (maxHeight < height) {
				maxHeight = height;
				maxDisks = combo;
		}
	}
	function backtrack(index, combo, runningHeight) {
		for (let i = 0; i < disks.length; i++) {
			if (i === index) continue;
			let width = disks[i][0];
			let depth = disks[i][1];
			let height = disks[i][2];
			let curr = combo[combo.length - 1];
			if (curr[0] < width && curr[1] < depth && curr[2] < height) {
				combo.push(disks[i]);
				runningHeight += height;
			}
		}
		return runningHeight;
	}
	return maxDisks;
}

// Solution 2 O(n^2) time | O(n) space

function diskStacking(disks) {
  if (disks.length === 1 || !disks.length) return disks;
	disks.sort((a, b) => a[2] - b[2]);
	let heights = disks.map(a => a[2]);
	let maxHeightIdx = 0;
	let sequence = new Array(disks.length).fill(null);
	for (let i = 1; i < disks.length; i++) {
		let currDisk = disks[i];
		for (let j = 0; j < i; j++) {
			let otherDisk = disks[j];
			if (currDisk[0] > otherDisk[0] && currDisk[1] > otherDisk[1] && currDisk[2] > otherDisk[2]) {
				if (heights[i] < currDisk[2] + heights[j]) {
					heights[i] = currDisk[2] + heights[j];
					sequence[i] = j;
				}
			}
		}
		if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
	}
	return buildSequence(disks, sequence, maxHeightIdx);
}

function buildSequence(disks, sequence, maxHeightIdx) {
	let ans = [];
	while (maxHeightIdx !== null) {
		ans.push(disks[maxHeightIdx]);
		maxHeightIdx = sequence[maxHeightIdx];
	}
	return ans.reverse();
}
