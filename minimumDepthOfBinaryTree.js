// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Solution 1 BFS using a queue O(n) time | O(n) space

var minDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let minDepth = 1;
  while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
          let popped = queue.pop();
          if (!popped.left && !popped.right) return minDepth;
          if (popped.left) queue.unshift(popped.left);
          if (popped.right) queue.unshift(popped.right);
      }
      minDepth++;
  }
  return minDepth;
};
