// 323. Number of Connected Components in an Undirected Graph

// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1

// Solution 1 with DFS O(e + n) time | O(e + n) space, where e is the number of edges and n is the number of nodes in the graph

var countComponents = function(n, edges) {
  if (edges.length === 0) return n;
  let map = new Map();
  for (let edge of edges) {
      if (!map.has(edge[0])) map.set(edge[0], []);
      if (!map.has(edge[1])) map.set(edge[1], []);
      map.get(edge[1]).push(edge[0]);
      map.get(edge[0]).push(edge[1]);
  }
  let number = 0;
  let visited = new Set();
  for (let [key, val] of map) {
      if (!visited.has(key)) {
          dfs(key);
          if (visited.size !== n) number++;
      }
  }
  function dfs(node) {
      let stack = [node];
      while (stack.length > 0) {
          let current = stack.pop();
          visited.add(current);
          let children = map.get(current);
          if (children.length > 0) {
              for (let child of children) {
                  if (visited.has(child)) continue;
                  stack.push(child);
              }
          }
      }
  }
  if (visited.size !== n) return n - visited.size + number;
  return number + 1;
};


