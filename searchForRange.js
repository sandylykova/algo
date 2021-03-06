// AlgoExpert: Search For Range
// Difficulty: hard

// Write a function that takes in a sorted array of integers as well as a target integer. The function should use a variation of the Binary Search algorithm to find a range of indices in between which the target number is contained in the array and should return this range in the form of an array.

// The first number in the output array should represent the first index at which the target number is located, while the second number should represent the last index at which the target number is located. The function should return [-1, -1] if the integer isn't contained in the array.

// Solution 1

function searchForRange(array, target) {
	let left = 0;
	let right = array.length - 1;
	let leftEdge, rightEdge;
	while (left <= right) {
		let midIdx = Math.floor((left + right) / 2);
		if (array[midIdx] > target) {
			right = midIdx - 1;
		} else if (array[midIdx] === target) {
			leftEdge = midIdx;
			rightEdge = midIdx;
			break;
		} else {
			left = midIdx + 1;
		}
	}
	if (leftEdge !== undefined) {
		left = 0;
		right = array.length - 1;
		while (left <= leftEdge) {
			let midIdx = Math.floor((left + leftEdge) / 2);
			if (array[midIdx] === target && midIdx === 0) {
				leftEdge = 0;
				break;
			} else if (array[midIdx] === target && array[midIdx - 1] !== target) {
				leftEdge = midIdx;
				break;
			} else if (array[midIdx] < target) {
				left = midIdx + 1;
			} else {
				leftEdge = midIdx - 1;
			}
		}
		while (rightEdge <= right) {
			let midIdx = Math.floor((right + rightEdge) / 2);
			if (array[midIdx] === target && midIdx === array.length - 1) {
				rightEdge = array.length - 1;
				break;
			} else if (array[midIdx] === target && array[midIdx + 1] !== target) {
				rightEdge = midIdx;
				break;
			} else if (array[midIdx] <= target) {
				rightEdge = midIdx + 1;
			} else {
				right = midIdx - 1;
			}
		}
		return [leftEdge, rightEdge];
	} else return [-1, -1];
}

// Solution 2 O(log(n)) time | O(1) space

function searchForRange(array, target) {
	let range = [];
	binarySearch(0, array.length - 1, true, range, array, target);
	binarySearch(0, array.length - 1, false, range, array, target);
	if (range[0] === undefined) return [-1, -1];
  return range;
}

function binarySearch(start, end, goLeft, range, arr, target) {
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] > target) {
			end = mid - 1;
		} else if (arr[mid] < target) {
			start = mid + 1;
		} else {
			if (goLeft) {
				if (mid === 0 || arr[mid - 1] !== target) {
					range[0] = mid;
					break;
				} else {
					end = mid - 1;
				}
			} else {
				if (mid === arr.length - 1 || arr[mid + 1] !== target) {
					range[1] = mid;
					break;
				} else {
					start = mid + 1;
				}
			}
		}
	}
}
