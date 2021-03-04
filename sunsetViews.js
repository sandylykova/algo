// Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings that can see the sunset.

// A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.

// The input array named buildings  contains positive, non-zero integers representing the heights of the buildings. A building at index i thus has a height denoted by buildings[i]. All of the buildings face the same direction, and this direction is either east or west, denoted by the input string named direction, which will always be equal to either "EAST" or "WEST". In relation to the input array, you can interpret these directions as right for east and left for west.

// Important note: the indices in the ouput array should be sorted in ascending order.

// Solution 1 O(n) time | O(n) space

function sunsetViews(buildings, direction) {
	if (buildings.length === 0) return [];
	let result = [];
  let eastTallest = [buildings[buildings.length - 1]];
	let westTallest = [buildings[0]];
	if (direction === 'WEST') {
		result.push(0);
		for (let i = 1; i < buildings.length; i++) {
			let curr = buildings[i];
			let last = westTallest[westTallest.length - 1];
			if (curr > last) {
				westTallest.push(curr);
			} else {
				westTallest.push(last);
			}
		}
		for (let i = 1; i < buildings.length; i++) {
			let curr = buildings[i];
			let prev = westTallest[i - 1];
			if (curr >= westTallest[i] && curr !== prev) {
				result.push(i);
			}
		}
	} else if (direction === 'EAST') {
		result.push(buildings.length - 1);
		for (let i = buildings.length - 2; i >= 0; i--) {
			let curr = buildings[i];
			let last = eastTallest[eastTallest.length - 1];
			if (curr > last) {
				eastTallest.push(curr);
			} else {
				eastTallest.push(last);
			}
		}
		eastTallest.reverse();
		for (let i = buildings.length - 2; i >= 0; i--) {
			let curr = buildings[i];
			let prev = eastTallest[i + 1];
			if (curr >= eastTallest[i] && curr !== prev) {
				result.push(i);
			}
		}
		result.reverse();
	}
  return result;
}

// Solution 2 O(n) time | O(n) space

function sunsetViews(buildings, direction) {
  let startIdx = direction === 'WEST' ? 0 : buildings.length - 1;
	let step = direction === 'WEST' ? 1 : -1;
	let idx = startIdx;
	let buildingsWithView = [];
	let maxHeight = 0;
	while (idx < buildings.length && idx >= 0) {
		let height = buildings[idx];
		if (maxHeight < height) buildingsWithView.push(idx);
		maxHeight = Math.max(maxHeight, height);
		idx += step;
	}
	if (direction === 'EAST') return buildingsWithView.reverse();
  return buildingsWithView;
}
