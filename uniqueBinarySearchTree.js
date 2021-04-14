// 96. Unique Binary Search Trees

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Input: n = 3
// Output: 5

// Solution 1

var numTrees = function(n) {
  let counter = new Array(n + 1).fill(0);
  counter[0] = 1;
  counter[1] = 1;
  for (let i = 2; i <= n; i++) {
      for (let j = 0; j < i; j++) {
          counter[i] += counter[j] * counter[i - j - 1];
      }
  }
  return counter[n];
};
