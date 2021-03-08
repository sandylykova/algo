// 863. All Nodes Distance K in Binary Tree

// We are given a binary tree (with root node root), a target node, and an integer value K.

// Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

// Output: [7,4,1]

// Solution 1

var distanceK = function(root, target, K) {
  let parentMap = bfs(root);
  let result = [];
  return findNode(root, target, result, K, parentMap);
};

function bfs(node) {
  let map = new Map();
  let seen = new Set();
  let q = [node];
  while (q.length > 0) {
      let len = q.length;
      for (let i = 0; i < len; i++) {
          let curr = q.shift();
          if (!seen.has(curr)) {
              seen.add(curr);
              if (curr.left) {
                  map.set(curr.left, curr);
                  q.push(curr.left);
              }
              if (curr.right) {
                  map.set(curr.right, curr);
                  q.push(curr.right);
              }
          }
      }
  }
  return map;
}

function findNode(root, target, result, k, parentMap) {
  let stack = [root];
  let curr;
  let seen = new Set();
  while (stack.length > 0) {
      curr = stack.pop();
      seen.add(curr);
      if (curr === target) break;
      if (curr.left && !seen.has(curr.left)) {
          stack.push(curr.left);
      }
      if (curr.right && !seen.has(curr.right)) {
          stack.push(curr.right);
      }
  }
  let q = [curr];
  let level = 0;
  seen = new Set();
  while (q.length > 0) {
      let len = q.length;
      if (k === 0) break;
      for (let i = 0; i < len; i++) {
          let curr = q.shift();
          if (!seen.has(curr)) {
              seen.add(curr);
              if (curr.left && !seen.has(curr.left)) {
                  q.push(curr.left);
              }
              if (curr.right && !seen.has(curr.right)) {
                  q.push(curr.right);
              }
              if (parentMap.has(curr) && !seen.has(parentMap.get(curr))) {
                  q.push(parentMap.get(curr));
              }
          }
      }
      level++;
      if (level === k) break;
  }
  for (let value of q) {
      if (value) result.push(value.val);
  }
  return result;
}
