// AlgoExpert: Largest Range
// Difficulty: hard

// Solution 1 O(n) time | O(n) space

function largestRange(array) {
	let nums = [];
	for (let num of array) {
		nums[num] = true;
	}
	let bestRange = [Infinity, -Infinity];
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		if (nums[num] === false) continue;
		nums[num] = true;
		let left = num - 1;
		let right = num + 1;
		while (nums[left] === true) {
			nums[left] = false;
			left--;
		}
		while (nums[right] === true) {
			nums[right] = false;
			right++;
		}
		if (bestRange[1] - bestRange[0] < right - left - 1) {
			bestRange[0] = left + 1;
			bestRange[1] = right - 1;
		}
	}
	return bestRange;
}
