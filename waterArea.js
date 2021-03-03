// AlgoExpert: Water area
// Difficulty: hard

// Solution 1 O(n) time | O(n) space

function waterArea(heights) {
	let leftMax = [heights[0]];
	let rightMax = [];
	rightMax[heights.length - 1] = heights[heights.length - 1];
	for (let i = 1; i < heights.length; i++) {
		let prev = leftMax[i - 1];
		let curr = heights[i];
		if (curr > prev) {
			leftMax[i] = curr;
		} else {
			leftMax[i] = prev;
		}
	}
	for (let i = heights.length - 2; i >= 0; i--) {
		let prev = rightMax[i + 1];
		let curr = heights[i];
		if (curr > prev) {
			rightMax[i] = curr;
		} else {
			rightMax[i] = prev;
		}
	}
	let water = 0;
	for (let i = 0; i < heights.length; i++) {
		let min = Math.min(leftMax[i], rightMax[i]);
		water += min - heights[i];
	}
	return water;
}
