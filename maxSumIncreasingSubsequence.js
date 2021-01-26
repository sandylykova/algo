// AlgoExpert: Min Heap Construction
// Difficulty: hard

// Write a function that takes in a non-empty array of integers and returns the greatest sum that can be generated from a strictly-increasing subsequence in the array as well as an array of the numbers in that subsequence.


// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

// You can assume that there will only be one increasing subsequence with the greatest sum.

// Solution 1 brute force O(n^2) time | O(n) space

function maxSumIncreasingSubsequence(array) {
	let map = new Map();
	for (let i = 0; i < array.length; i++) {
		let curr = array[i];
		map.set(curr, []);
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] > curr) {
				map.get(curr).push(array[j]);
			}
		}
	}
	let max = -Infinity;
	let vals = [];
	let large = [];
	for (let [key, value] of map) {
		vals = [];
		let sum = key;
		let prev = key;
		vals.push(key);
		for (let val of value) {
			if (val > prev) {
				sum += val;
				prev = val;
				vals.push(val);
			} else {
				while (vals[vals.length - 1] >= val) {
					sum -= vals.pop();
				}
				vals.push(val);
				sum += val;
				prev = val;
			}
			if (max < sum) {
				max = sum;
				large = vals.slice();
			}
		}
		if (max < sum) {
			max = sum;
			large = vals.slice();
		}
	}
	return [max, large];
}

// Solution 2 O(n^2) time | O(n) space

function maxSumIncreasingSubsequence(array) {
	let maxValues = array.slice();
	let indecies = new Array(array.length).fill(null);
	let maxSumIdx = 0;
	for (let i = 1; i < array.length; i++) {
		let currentValue = array[i];
		for (let j = 0; j < i; j++) {
			let prev = array[j];
			if (prev < currentValue && maxValues[j] + currentValue >= maxValues[i]) {
				maxValues[i] = maxValues[j] + currentValue;
				indecies[i] = j;
			}
		}
		if (maxValues[i] >= maxValues[maxSumIdx]) {
			maxSumIdx = i;
		}
	}
	return [maxValues[maxSumIdx], buildReturnValue(array, indecies, maxSumIdx)];
}

function buildReturnValue(array, indecies, maxSumIdx) {
	let vals = [];
	while (maxSumIdx !== null) {
		vals.push(array[maxSumIdx]);
		maxSumIdx = indecies[maxSumIdx];
	}
	return vals.reverse();
}
