// 1059. All Paths from Source Lead to Destination

// Given the edges of a directed graph where edges[i] = [ai, bi] indicates there is an edge between nodes ai and bi, and two nodes source and destination of this graph, determine whether or not all paths starting from source eventually, end at destination, that is:

// At least one path exists from the source node to the destination node
// If a path exists from the source node to a node with no outgoing edges, then that node is equal to destination.
// The number of possible paths from source to destination is a finite number.
// Return true if and only if all roads from source lead to destination.

// Input: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
// Output: true

// Solution 1 O(v+e) time | O(v+e) space

var leadsToDestination = function(n, edges, source, destination) {
  let graph = buildGraph(edges, destination);
  if (graph === null) return false;
  let visited = new Set();
  function dfs(curr) {
      if (visited.has(curr)) return false;
      if (curr === destination) return true;
      if (!graph.has(curr) || !graph.get(curr).length) return false;
      visited.add(curr);
      let values = graph.get(curr);
      for (let value of values) {
          if (!dfs(value)) return false;
      }
      visited.delete(curr);
      return true;
  }
  return dfs(source);
};

function buildGraph(edges, destination) {
  let map = new Map();
  for (let [from, to] of edges) {
      if (from === destination) return null;
      if (!map.has(from)) map.set(from, []);
      map.get(from).push(to);
  }
  return map;
}
