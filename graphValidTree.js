// 261. Graph Valid Tree

// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
// Output: false

// Solution 1 with iterative DFS O(e + n) time | O(e + n) space, where e is the number of edges and n is the number of nodes in the graph

var validTree = function(n, edges) {
  /*
  1.build an adjacent list;
  2.iteratively perform dfs;
  3.define stack and push first node 0;
  4.for each iteration define parent - child relationships in parent map;
  5.because graph is undirected pass the same parent - child and child - parent values;
  6.if there is a cycle than parent map already has it so we can return false;
  7. add children nodes to the stack and parent map;
  8. if parent map has all N nodes than return true, otherwise return false;
  */
  let map = new Map();
  let parent = new Map();
  for (let i = 0; i < edges.length; i++) {
      if (!map.has(edges[i][0])) map.set(edges[i][0], []);
      if (!map.has(edges[i][1])) map.set(edges[i][1], []);
      map.get(edges[i][0]).push(edges[i][1]);
      map.get(edges[i][1]).push(edges[i][0]);
  }
  parent.set(0, -1);
  let stack = [0];
  while (stack.length > 0) {
      let node = stack.pop();
      let children = map.get(node);
      for (let i = 0; children && i < children.length; i++) {
          let child = children[i];
          if (child === parent.get(node)) continue;
          if (parent.has(child)) return false;
          parent.set(child, node);
          stack.push(child);
      }
  }
  return parent.size === n;
};
