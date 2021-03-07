// 637. Average of Levels in Binary Tree

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

// Solution 1

var averageOfLevels = function(root) {
  let result = [];
  let q = [root];
  while (q.length) {
      let len = q.length;
      let sum = 0;
      let numOfNodes = 0;
      for (let i = 0; i < len; i++) {
          let curr = q.shift();
          numOfNodes++;
          sum += curr.val;
          if (curr.left !== null) q.push(curr.left);
          if (curr.right !== null) q.push(curr.right);
      }
      let av = sum / numOfNodes;
      result.push(av);
  }
  return result;
};
