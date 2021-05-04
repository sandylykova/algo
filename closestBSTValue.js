// 270. Closest Binary Search Tree Value

// Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

// Input: root = [4,2,5,1,3], target = 3.714286
// Output: 4

// Solution 1 O(log(n)) time | O(log(n)) space (O(n) in the worst case)

var closestValue = function(root, target) {
  let node = root;
  let closest = Infinity;
  let currDiff = Infinity;
  while (node !== null) {
      let diff = Math.abs(node.val - target);
      if (currDiff > diff) {
          currDiff = diff;
          closest = node.val;
      }
      node = target < node.val ? node.left : node.right;
  }
  return closest;
};
