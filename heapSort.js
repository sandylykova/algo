// AlgoExpert: Heap Sort
// Difficulty: hard

// Solution 1 O(nlog(n)) time | O(1) space

function heapSort(array) {
	buildMaxHeap(array);
	for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
		swap(0, endIdx, array);
		siftDown(0, endIdx - 1, array);
	}
	return array;
}

function buildMaxHeap(array) {
	let parentIdx = Math.floor((array.length - 2) / 2);
	for (let currentIdx = parentIdx; currentIdx >= 0; currentIdx--) {
		siftDown(currentIdx, array.length - 1, array);
	}

}

function siftDown(currentIdx, endIdx, array) {
	let childOneIdx = 2 * currentIdx + 1;
	while (childOneIdx <= endIdx) {
		let idxToSwap;
		let childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
		if (childTwoIdx !== -1 && array[childTwoIdx] > array[childOneIdx]) {
			idxToSwap = childTwoIdx;
		} else {
			idxToSwap = childOneIdx;
		}
		if (array[idxToSwap] > array[currentIdx]) {
			swap(idxToSwap, currentIdx, array);
			currentIdx = idxToSwap;
			childOneIdx = 2 * currentIdx + 1;
		} else {
			return;
		}
	}
}

function swap(i, j, array) {
	[array[i], array[j]] = [array[j], array[i]];
}
