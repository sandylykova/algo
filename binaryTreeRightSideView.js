// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

// Solution 1 BFS O(n) time | O(n) space

var rightSideView = function(root) {
    if (!root) return [];
    let rightSide =[];
    var queue =[[0, root]];
    while (queue.length>0) {
        let [level,node] = queue.shift();
        rightSide[level] = node.val;
        if (node.left) queue.push([level + 1, node.left]);
        if (node.right) queue.push([level + 1, node.right]);
    }
    return rightSide;
};

// Solution 2 DFS with recursion O(n) time | O(n) space

var rightSideView = function(root) {

  const result = [];

  var traverse = function(node,level){
      if (!node) return;
      result[level] = node.val;
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
  };

  traverse(root, 0);
  return result;
};

