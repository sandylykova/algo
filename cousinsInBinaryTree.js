// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false

// Solution 1 O(n) time | O(n) space

var isCousins = function(root, x, y) {
  let xDepth = getDepth(root, x, 0);
  let yDepth = getDepth(root, y, 0);
  if (xDepth !== yDepth) return false;
  let xParent = getParent(root, x);
  let yParent = getParent(root, y);
  if (xParent !== yParent) return true;
  return false;
};

function getDepth(root, node, depth) {
  let stack = [[root, depth]];
  while (stack.length > 0) {
    let [curr, depth] = stack.pop();
    if (curr.val === node) return depth;
    if (curr.left) stack.push([curr.left, depth + 1]);
    if (curr.right) stack.push([curr.right, depth + 1]);
  }
}
function getParent(root, node) {
  let stack = [[root, null]];
  while (stack.length > 0) {
    let [curr, parent] = stack.pop();
    if (curr.val === node) return parent;
    if (curr.left) stack.push([curr.left, curr]);
    if (curr.right) stack.push([curr.right, curr]);
  }
}
