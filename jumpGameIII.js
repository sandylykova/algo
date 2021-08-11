// 1306. Jump Game III

// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

// Notice that you can not jump outside of the array at any time.

// Input: arr = [4,2,3,0,3,1,2], start = 5
// Output: true
// Explanation:
// All possible ways to reach at index 3 with value 0 are:
// index 5 -> index 4 -> index 1 -> index 3
// index 5 -> index 6 -> index 4 -> index 1 -> index 3

// Solution 1 BFS O(n) time | O(n) space

var canReach = function(arr, start) {
  if (!arr || !arr.length) return false;
  let q = [start];
  let n = arr.length;
  while (q.length > 0) {
      let node = q.shift();
      if (arr[node] === 0) return true;
      if (arr[node] < 0) continue;
      if (arr[node] + node < n) q.push(arr[node] + node);
      if (node - arr[node] >= 0) q.push(node - arr[node]);
      arr[node] = -arr[node];
  }
  return false;
};
