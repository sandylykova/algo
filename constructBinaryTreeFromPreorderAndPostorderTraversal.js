// 889. Construct Binary Tree from Preorder and Postorder Traversal

// Return any binary tree that matches the given preorder and postorder traversals.

// Values in the traversals pre and post are distinct positive integers.

// Input: pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

// Solution 1

var constructFromPrePost = function(pre, post) {
  const map = {}; let i = 0;

  for(let i = 0; i < post.length; i++) {
      map[post[i]] = i;
  }

  function callDFS(start, end) {
      if (start > end || i >= pre.length) return null;
      const node = pre[i++], idx = map[pre[i]];
      const tree = new TreeNode(node);
      if (idx < start || idx > end) return tree;
      tree.left = callDFS(start, idx);
      tree.right = callDFS(idx + 1, map[node] - 1)
      return tree;
  }
  return callDFS(0, post.length - 1);
};
