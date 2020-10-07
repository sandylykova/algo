// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,2,null,2] is not:

//     1
//    / \
//   2   2
//    \   \
//    2    2

// Solution 1 recursive O(n) time | The number of recursive calls is bound by the height of the tree. In the worst case, the tree is linear and the height is in O(n). Therefore, space complexity due to recursive calls on the stack is O(n) in the worst case.

var isSymmetric1 = function(root) {
    return isMirror(root, root);
};

const isMirror = (leftSide, rightSide) => {
    if (!leftSide && !rightSide) return true;
    if (!leftSide || !rightSide) return false;
    return (leftSide.val === rightSide.val) &&
        isMirror(leftSide.right, rightSide.left) &&
        isMirror(leftSide.left, rightSide.right);
};

// Solution 2 iterative

// Time complexity : O(n). Because we traverse the entire input tree once, the total run time is O(n), where nn is the total number of nodes in the tree.

// Space complexity : There is additional space required for the search queue. In the worst case, we have to insert O(n) nodes in the queue. Therefore, space complexity is O(n).

const isSymmetric2 = root => {
  let stack = [root, root];
  while (stack.length) {
      let first = stack.pop();
      let second = stack.pop();
      if (first === null && second === null) continue;
      if (first === null || second === null) return false;
      if (first.val !== second.val) return false;
      stack.push(first.left);
      stack.push(second.right);
      stack.push(first.right);
      stack.push(second.left);
  }
  return true;
};
