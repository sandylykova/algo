// AlgoExpert: Continuounus Median
// difficulty: hard

class ContinuousMedianHandler {
  constructor() {
		this.lowers = new Heap([], max_heap_func);
		this.greaters = new Heap([], min_heap_func);
    this.median = null;
  }
  insert(number) {
    if (!this.lowers.length || number < this.lowers.peek()) {
			this.lowers.insert(number);
		} else {
			this.greaters.insert(number);
		}
		this.rebalanceHeaps();
		this.updateMedian();
  }
	rebalanceHeaps() {
		if (this.lowers.length - this.greaters.length === 2) {
			this.greaters.insert(this.lowers.remove());
		} else if (this.greaters.length - this.lowers.length === 2) {
			this.lowers.insert(this.greaters.remove());
		}
	}
	updateMedian() {
		if (this.lowers.length === this.greaters.length ) {
			this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
		} else if (this.lowers.length > this.greaters.length) {
			this.median = this.lowers.peek();
		} else {
			this.median = this.greaters.peek();
		}
	}
  getMedian() {
    return this.median;
  }
}

class Heap {
	constructor(array, comparisonFunc) {
		this.heap = this.buildHeap(array);
		this.length = this.heap.length;
		this.comparisonFunc = comparisonFunc;
	}
	buildHeap(array) {
		let lastParentIdx = Math.floor((array.length - 2) / 2);
		for (let i = lastParentIdx; i >= 0; i--) {
			this.siftDown(i, array.length - 1, array);
		}
		return array;
	}
	siftDown(currIdx, endIdx, array) {
		let child1 = currIdx * 2 + 1;
		while (child1 <= endIdx) {
			let child2 = currIdx * 2 + 2 <= endIdx ? currIdx * 2 + 2 : -1;
			let swapIdx;
			if (child2 !== -1) {
				if (this.comparisonFunc(array[child2], array[child1])) {
					swapIdx = child2;
				} else {
					swapIdx = child1;
				}
			} else {
				swapIdx = child1;
			}
			if (this.comparisonFunc(array[swapIdx], array[currIdx])) {
				this.swap(currIdx, swapIdx, array);
				currIdx = swapIdx;
				child1 = currIdx * 2 + 1;
			} else {
				return;
			}
		}
	}
	siftUp(currIdx, array) {
		let parentIdx = Math.floor((currIdx - 1) / 2);
		while (currIdx > 0) {
			if (this.comparisonFunc(array[currIdx], array[parentIdx])) {
				this.swap(currIdx, parentIdx, array);
				currIdx = parentIdx;
				parentIdx = Math.floor((currIdx - 1) / 2);
			} else {
				return;
			}
		}
	}
	peek() {
		return this.heap[0];
	}
	remove() {
		this.swap(0, this.length - 1, this.heap);
		let removedValue = this.heap.pop();
		this.length--;
		this.siftDown(0, this.length - 1, this.heap);
		return removedValue;
	}
	insert(value) {
		this.heap.push(value);
		this.length++;
		this.siftUp(this.length - 1, this.heap);
	}
	swap(i, j, arr) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}

function max_heap_func(a, b) {
	return a > b;
}

function min_heap_func(a, b) {
	return a < b;
}
