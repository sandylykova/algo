// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

// Input: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// Output: 1

// Solution 1 O(n) time | O(n) space

var kthSmallest = function(root, k) {
  if (!root) return root;
  let values = [];
  function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
  }
  traverse(root);
  return values[k - 1];
};

// Solution 2

var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  for(let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for(let [num, freq] of freqMap) {
      bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for(let i = bucket.length - 1; i >= 0; i--) {
      if (bucket[i]) result.push(...bucket[i]);
      if (result.length === k) break;
  }
  return result;
};
