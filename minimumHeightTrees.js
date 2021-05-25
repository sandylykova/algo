// 310. Minimum Height Trees

// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// Solution 1 O(n) time | O(n) space

var findMinHeightTrees = function(n, edges) {
  if (n === 1) return [0];
  let graph = buildGraph(edges);
  let leaves = [];
  let indegrees = [];
  for (let [key, val] of graph) {
      indegrees[key] = val.length;
      if (indegrees[key] === 1) leaves.push(key);
  }
  while (n > 2) {
      let size = leaves.length;
      n -= size;
      let newLeaves = [];
      for (let i = 0; i < size; i++) {
          let vertex = leaves.pop();
          let edge = graph.get(vertex);
          for (let i = 0; i < edge.length; i++) {
              let curr = edge[i];
              indegrees[curr]--;
              if (indegrees[curr] === 1) newLeaves.push(curr);
          }
      }
      leaves = newLeaves;
  }
  return leaves;
};

function buildGraph(edges) {
  let map = new Map();
  for (let [v1, v2] of edges) {
      if (!map.has(v1)) map.set(v1, []);
      if (!map.has(v2)) map.set(v2, []);
      map.get(v1).push(v2);
      map.get(v2).push(v1);
  }
  return map;
}
