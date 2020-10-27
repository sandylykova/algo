// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

// If two nodes are in the same row and column, the order should be from left to right.

// Input: [3,9,20,null,null,15,7]
// Output:
// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]

const verticalOrder = (root) => {
  if(!root) return [];
  const levelMap = new Map();
  const queue = [];

  queue.unshift({ node: root, level: 0 });
  let min = 0;
  let max = 0;
  while(queue.length) {
      const curr = queue.pop();
      if(!levelMap.has(curr.level)) levelMap.set(curr.level, []);
      levelMap.get(curr.level).push(curr.node.val);
      min = Math.min(min, curr.level);
      max = Math.max(max, curr.level);

      if(curr.node.left) queue.unshift( { node: curr.node.left, level: curr.level - 1 } );
      if(curr.node.right) queue.unshift( { node: curr.node.right, level: curr.level + 1 } );
  }

  let j = 0;
  let ans = [];
  for(let i = min; i <= max; i++) {
      ans[j] = levelMap.get(i);
      j++;
  }

  return ans;
};
