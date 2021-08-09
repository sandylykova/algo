// 968. Binary Tree Cameras

// You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.

// Return the minimum number of cameras needed to monitor all nodes of the tree.

// Input: root = [0,0,null,0,null,0,null,null,0]
// Output: 2
// Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

// Solution 1 O(n) time | O(1) space

var minCameraCover = function(root) {
  if (!root) return 0;
  let camera = 0;

  // hasCamera, notMonitored, Monitored

  function traverse(node) {
      if (!node) return 'Monitored';
      let left = traverse(node.left);
      let right = traverse(node.right);

      if (left === 'Monitored' && right === 'Monitored') {
          return 'notMonitored';
      }
      if (left === 'notMonitored' || right === 'notMonitored') {
          camera++;
          return 'hasCamera';
      }
      if (left === 'hasCamera' || right === 'hasCamera') {
          return 'Monitored';
      }

  }
  if (traverse(root) === 'notMonitored') camera++;
  return camera;
};

// Solution 2 O(n) time | O(n) space

var minCameraCover = function(root) {
  if (!root) return 0;
  let camera = 0;
  let covered = new Set();
  covered.add(null);
  function traverse(node, parent) {
      if (node) {
          traverse(node.left, node);
          traverse(node.right, node);
          if ((parent === null && !covered.has(node)) || !covered.has(node.left) || !covered.has(node.right)) {
              camera += 1;
              covered.add(node);
              covered.add(parent);
              covered.add(node.left);
              covered.add(node.right);
          }
      }
  }
  traverse(root, null);
  return camera;
};
