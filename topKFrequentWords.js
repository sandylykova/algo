// 692. Top K Frequent Words

// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

var topKFrequent = function(words, k) {
  words.sort();
  let map = new Map();
  let  max = 1;
  for (let word of words) {
      if (map.has(word)) {
          let count = map.get(word) + 1;
          map.set(word, count);
          max = Math.max(max, count);
      } else {
          map.set(word, 1);
      }
  }
  let results = [];
  while (k > 0) {
      for (let i = 0; i < words.length && k > 0; i++) {
          if (map.get(words[i]) === max) {
              map.delete(words[i]);
              results.push(words[i]);
              k--;
          }
      }
      max--;
  }
  return results;
};

// Solution 2 with Max Heap

var topKFrequent = function(words, k) {
    // words.sort();
    let map = new Map();
    for (let word of words) {
        if (map.has(word)) {
            let count = map.get(word) + 1;
            map.set(word, count);
        } else {
            map.set(word, 1);
        }
    }
    let results = [];
    let values = Array.from(map.entries());
    let maxHeap = new MaxHeap(values);
    // console.log(maxHeap)
    while (maxHeap.size() && k > 0) {
        results.push(maxHeap.remove()[0]);
        k--;
    }
    return results;
}

class MaxHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
		let lastIdx = array.length - 1;
        let lastParentIdx = Math.floor((lastIdx - 1) / 2);
		for (let currentIdx = lastParentIdx; currentIdx >= 0; currentIdx--) {
			this.siftDown(currentIdx, lastIdx, array)
		}
		return array;
    }
    size() {
        return this.heap.length > 0;
    }
    siftDown(currentIdx, lastIdx, array) {
		let childOne = currentIdx * 2 + 1;
		// ERRRRROORRRRR
        while (childOne <= lastIdx) {
			let swap;
			let childTwo = currentIdx * 2 + 2 <= lastIdx ? currentIdx * 2 + 2 : -1;
			if (childTwo !== -1 && array[childTwo][1] > array[childOne][1]) {
				swap = childTwo;
			} else if (childTwo !== -1 && array[childTwo][1] === array[childOne][1]) {
                if (array[childTwo][0] > array[childOne][0]) swap = childOne;
                else swap = childTwo;
			} else {
                swap = childOne;
            }
			if (array[currentIdx][1] < array[swap][1]) {
				this.swap(currentIdx, swap, array);
				currentIdx = swap;
				// ERRRRROORRRRR
				childOne = currentIdx * 2 + 1;
			} else if (array[currentIdx][1] === array[swap][1]) {
				if (array[currentIdx][0] > array[swap][0]) {
                    this.swap(currentIdx, swap, array);
				    currentIdx = swap;
				    // ERRRRROORRRRR
				    childOne = currentIdx * 2 + 1;
                } else {
                    return;
                }
			} else {
                return;
            }
		}
    }

    siftUp(currentIdx, array) {
        while (currentIdx > 0) {
			let parentIdx = Math.floor((currentIdx - 1) / 2);
			// ERRRRROORRRRR >
			if (array[currentIdx][1] > array[parentIdx][1]) {
				this.swap(currentIdx, parentIdx, array);
				currentIdx = parentIdx;
            } else if (array[currentIdx][1] === array[parentIdx][1]) {
                if (array[currentIdx][0] < array[parentIdx][0]) {
                    this.swap(currentIdx, parentIdx, array);
				    currentIdx = parentIdx;
                }
            } else {
				return;
			}
		}
    }

    peek() {
        return this.heap[0];
    }

    remove() {
        this.swap(0, this.heap.length - 1, this.heap);
		let removedValue = this.heap.pop();
		this.siftDown(0, this.heap.length - 1, this.heap);
		return removedValue;
    }

    insert(value) {
        this.heap.push(value);
		this.siftUp(this.heap.length - 1, this.heap);
    }
	swap(i, j, array) {
		[array[i], array[j]] = [array[j], array[i]];
	}
}
