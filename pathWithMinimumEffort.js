// 1631. Path With Minimum Effort

// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

// O(n * mlog(n*m)) time | O(n*m) space

var minimumEffortPath = function(heights) {
  let efforts = [];
  let n = heights.length;
  let m = heights[0].length;
  if (n <= 1 && m <= 1) return 0;
  for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < m; j++) {
          row.push(Infinity);
      }
      efforts.push(row);
  }
  let heap = new MinHeap();
  heap.insert([0, 0, 0]);
  let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  while (heap.size()) {
      let [effort, row, col] = heap.remove();
      if (effort > efforts[row][col]) continue;
      if (row === n - 1 && col === m - 1) return efforts[row][col];
      for (let [x, y] of dirs) {
          let newRow = row + x;
          let newCol = col + y;
          if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m) {
              let newEffort = Math.max(effort, Math.abs(heights[row][col] - heights[newRow][newCol]));
              if (newEffort < efforts[newRow][newCol]) {
                  heap.insert([newEffort, newRow, newCol]);
                  efforts[newRow][newCol] = newEffort;
              }
          }
      }
  }
  return 0;
};

class MinHeap {
  constructor() {
      this.heap = [];
  }
  insert(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1, this.heap);
  }
  remove() {
      this.swap(0, this.heap.length - 1, this.heap);
      let removed = this.heap.pop();
      this.bubbleDown(0, this.heap.length - 1, this.heap);
      return removed;
  }
  swap(i, j, heap) {
      [heap[i], heap[j]] = [heap[j], heap[i]];
  }
  bubbleUp(idx, heap) {
      let parentIdx = Math.floor((idx - 1) / 2);
      while (idx > 0) {
          if (heap[parentIdx][0] < heap[idx][0]) return;
          this.swap(parentIdx, idx, heap);
          idx = parentIdx;
          parentIdx = Math.floor((idx - 1) / 2);
      }
  }
  bubbleDown(start, end, heap) {
      let child1 = 2 * start + 1;
      while (child1 <= end) {
          let child2 = 2 * start + 2 <= end ? 2 * start + 2 : -1;
          let swapIdx;
          if (child2 !== -1 && heap[child2][0] < heap[child1][0]) {
              swapIdx = child2;
          } else {
              swapIdx = child1;
          }
          if (heap[start][0] > heap[swapIdx][0]) {
              this.swap(start, swapIdx, heap);
              start = swapIdx;
              child1 = 2 * start + 1;
          } else {
              return;
          }
      }
  }
  size() {
      return this.heap.length > 0;
  }
}
