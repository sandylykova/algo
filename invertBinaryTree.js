// Write a function that takes in a Binary Tree and inverts instanceof. In other words, the function should swap every left node in the tree for its corresponding right node.

// Input: [1, 2, 4, 8, null, null, 9, null, null, 5, 3, 6, null, null, 7, null, null];
// Output: [1, 3, 7, null, null, 6, 2, 5, null, null, 4, 9, null, null, 8, null, null];

// Solution 1 iterative O(n) time | O(n) space

function invertBinaryTree(tree) {
  let queue = [tree];
  while (queue.length > 0) {
    let cur = queue.shift();
    if (cur === null) continue;
    swap(cur);
    queue.push(cur.left);
    queue.push(cur.right);
  }
}

const swap = tree => {
  let left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};

// Solution 2 recursive O(n) time | O(n) space

function invertBinaryTree(tree) {
  if (tree === null) return;
  swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

const swap = tree => {
  let left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};
