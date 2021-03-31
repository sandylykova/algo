// 378. Kth Smallest Element in a Sorted Matrix

// Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

// Solution 1 with help of min heap

var kthSmallest = function(matrix, k) {
  if (k === 1) return matrix[0][0];
  if (k === matrix.length * matrix.length) return matrix[matrix.length - 1][matrix.length - 1];
  let minHeap = new MinHeap();
  for (let i = 0; i < matrix.length; i++) {
      let value = {
          val: matrix[0][i],
          col: i,
          row: 0
      };
      minHeap.insert(value);
  }
  let smallest;
  while (k > 0) {
      k--;
      let current = minHeap.remove();
      let {val, col, row} = current;
      smallest = val;
      if (row < matrix.length - 1) {
           let matrixValue = matrix[row + 1][col];
          minHeap.insert({val: matrixValue, col, row: row + 1});
      }
  }
  return smallest;
};

class MinHeap {
  constructor() {
      this.heap = [];
  }
  siftDown(curr, endIdx, array) {
      let child1 = curr * 2 + 1;
      let swapIdx;
      while (child1 <= endIdx) {
          let child2 = curr * 2 + 2 <= endIdx ? curr * 2 + 2 : -1;
          if (child2 !== -1 && array[child2].val < array[child1].val) {
              swapIdx = child2;
          } else {
              swapIdx = child1;
          }
          if (array[curr].val > array[swapIdx].val) {
              this.swap(curr, swapIdx, array);
              curr = swapIdx;
              child1 = curr * 2 + 1;
          } else {
              return;
          }
      }
  }
  swap(i, j, array) {
      [array[i], array[j]] = [array[j], array[i]];
  }
  remove() {
      this.swap(0, this.heap.length - 1, this.heap);
      let currentSmallest = this.heap.pop();
      this.siftDown(0, this.heap.length - 1, this.heap);
      return currentSmallest;
  }
  insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1, this.heap);
  }
  siftUp(curr, array) {
      let parentIdx = Math.floor((curr - 1) / 2);
      while (curr > 0 && array[parentIdx].val > array[curr].val) {
          this.swap(parentIdx, curr, array);
          curr = parentIdx;
          parentIdx = Math.floor((curr - 1) / 2);
      }
  }
}
