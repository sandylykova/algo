// You're given an array of integers where each integer represents a jump of its value in the array. For instance, the integer 2  represents a jump of two indices forward in the array; the integer 3  represents a jump of three indices backward in the array.
// If a jump spills past the array's bounds, it wraps over to the other side. For instance, a jump of -1 at index 0  brings us to the last index in the array. Similarly, a jump of 1  at the last index in the array brings us to index 0.

// Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.

// Solution 1 O(n) time | O(1) space

function hasSingleCycle(array) {
	let numberOfSteps = 0;
	let currIndex = 0;
	while (numberOfSteps < array.length) {
		if (numberOfSteps > 0 && currIndex === 0) return false;
		numberOfSteps++;
		currIndex = getNextIndex(array, currIndex);
	}
	return currIndex === 0;
}

function getNextIndex(array, currIndex) {
	let jump = array[currIndex];
	let nextIndex = (currIndex + jump) % array.length;
	return nextIndex >= 0 ? nextIndex : nextIndex + array.length;
}

// Solution 2 O(n) time | O(n) space

function hasSingleCycle(array) {
	let graph = buildGraph(array);
	let visited = new Set();
	let stack = [0];
	while (stack.length > 0) {
		let curr = stack.pop();
		stack.push(graph[curr]);
		if (visited.has(curr)) {
			if (curr === 0) return visited.size === array.length;
			else return false;
		}
		visited.add(curr);
	}
	return true;
}

function buildGraph(array) {
	let adjList = {};
	let len = array.length;
	for (let i = 0; i < array.length; i++) {
		let step = array[i];
		let value = i + step;
		value = value % len;
		if (value < 0) {
			value += len;
		}
		adjList[i] = value;
	}
	return adjList;
}
