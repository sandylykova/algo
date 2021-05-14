// 117. Populating Next Right Pointers in Each Node II

// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

// Solution 1 O(n) time | O(1) space

var connect = function(root) {
  if (!root) return root;
  let leftmost = root;
  let curr = leftmost;
  let prev;
  while (leftmost) {
      prev = null;
      curr = leftmost;
      leftmost = null;
      while (curr) {
          processChild(curr.left);
          processChild(curr.right);
          curr = curr.next;
      }
  }
  function processChild(child) {
      if (child !== null) {
          if (prev !== null) {
              prev.next = child;
          } else {
              leftmost = child;
          }
          prev = child;
      }
  }
  return root;
};

// Solution 2 O(n) time | O(n) space

var connect = function(root) {
    if (!root) return null;

    let queue = [root];

    while (queue.length) {
        let n = queue.length;

        for (let i = 0; i < n; i++) {
            let node = queue.shift();

            node.next = i === n - 1 ? null : queue[0];

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

    }

    return root;
};

// Solution 3 O(n) time | O(1) space

var connect = function(root) {
    if (!root) return root;
    let leftmost = root;
    let curr = root;
    while (leftmost.left) {
        curr = leftmost;
        while (curr) {
            curr.left.next = curr.right;
            if (curr.next) curr.right.next = curr.next.left;
            curr = curr.next;
        }
        leftmost = leftmost.left;
    }
    return root;
};
