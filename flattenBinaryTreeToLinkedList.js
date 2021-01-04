// Given a binary tree, flatten it to a linked list in-place.

// For example, given the following tree:

//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:

// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6

// Solution 1 recursive preorder O(n) time | O(n) space

const flatten = (root) => {
    const list = [];
    preOrderTraversal(root, list);

    if (list.length === 0 ) return;

    for (let i = 0; i < list.length - 1; i++) {
        const node = list[i];
        node.left = null;
        node.right = list[i + 1];
    }

    const lastNode = list[list.length -1];
    lastNode.left = null;
    lastNode.right = null;
};

const preOrderTraversal = (node, list) => {
    if (!node) return;

    list.push(node);
    preOrderTraversal(node.left, list);
    preOrderTraversal(node.right, list);
};

// Solution 2 in place O(n) time | O(1) space

const flatten = (root) => {
  if (!root) return;
  let node = root;
  while (node !== null) {
      if (node.left !== null) {
          let rightmost = node.left;
          while (rightmost.right !== null) {
              rightmost = rightmost.right;
          }
          rightmost.right = node.right;
          node.right = node.left;
          node.left = null;
      }
      node = node.right;
  }
};
