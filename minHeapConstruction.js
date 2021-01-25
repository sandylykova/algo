// AlgoExpert: Min Heap Construction
// Difficulty: medium

// Implement a MinHeap class that supports:

// - Building a Min Heap from an input array of integers.
// - Inserting integers in the heap.
// - Removing the heap's minimum / root value.
// - Peeking at the heap's minimum / root value.

// Note that the heap should be represented in the form of an array.

// Solution 1

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  // O(n) time | O(1) space
  buildHeap(array) {
    let firstParentIdx = Math.floor((array.length - 2) / 2);
		for (let currIdx = firstParentIdx; currIdx >= 0; currIdx--) {
			this.siftDown(currIdx, array.length - 1, array);
		}
		return array;
	}
  // O(log(n)) time | O(1) space
  siftDown(currIdx, endIdx, heap) {
    let childOneIdx = currIdx * 2 + 1;
		while (childOneIdx <= endIdx) {
		let childTwoIdx = currIdx * 2 + 2 <= endIdx ? currIdx * 2 + 2 : -1;
			let idxToSwap;
			if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
				idxToSwap = childTwoIdx;
			} else {
				idxToSwap = childOneIdx;
			}
			if (heap[idxToSwap] < heap[currIdx]) {
				this.swap(currIdx, idxToSwap, heap);
				currIdx = idxToSwap;
				childOneIdx = currIdx * 2 + 1;
			} else {
				return;
			}
		}
	}
  // O(log(n)) time | O(1) space
  siftUp(currIdx, heap) {
    let parentIdx = Math.floor((currIdx - 1) / 2);
		while (currIdx > 0 && heap[currIdx] < heap[parentIdx]) {
			this.swap(currIdx, parentIdx, heap);
			currIdx = parentIdx;
			parentIdx = Math.floor((currIdx - 1) / 2);
		}
	}
  // O(1) time | O(1) space
  peek() {
    return this.heap[0];
  }
  // O(log(n)) time | O(1) space
  remove() {
    let removedValue = this.heap[0];
		this.swap(0, this.heap.length - 1, this.heap);
		this.heap.pop();
		this.siftDown(0, this.heap.length - 1, this.heap);
		return removedValue;
  }
  // O(log(n)) time | O(1) space
  insert(value) {
    this.heap.push(value);
		this.siftUp(this.heap.length - 1, this.heap);
  }
	swap(i, j, heap) {
		[heap[i], heap[j]] = [heap[j], heap[i]];
	}
}
