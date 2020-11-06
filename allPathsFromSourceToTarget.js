// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1, and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]

var allPathsSourceTarget = function(graph) {
  let result = [];
  let target = graph.length - 1;
  function dfs(graph, path, currNode) {
      if (currNode === target) {
          result.push(Array.from(path));
          return;
      }
      for (let node of graph[currNode]) {
          path.push(node);
          dfs(graph, path, node);
          path.pop();
      }
  }
  dfs(graph, [ 0 ], 0);
  return result;
};
