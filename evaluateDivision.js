// 399. Evaluate Division

// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]

// Solution 1

var calcEquation = function(equations, values, queries) {
  // initialize a graph
  const adjList = new Map();
  for (let i = 0; i < equations.length; i++) {
      adjList.set(equations[i][0], []);
      adjList.set(equations[i][1], []);
  }
  // building the graph
  for (let i = 0; i < equations.length; i++) {
      let first = equations[i][0];
      let second = equations[i][1];
      let weight = values[i];
      adjList.get(first).push([second, weight]);
      adjList.get(second).push([first, 1 / weight]);
  }
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
      let src = queries[i][0];
      let dest = queries[i][1];
      let seen = new Set();
      let result = dfs(adjList, src, src, dest, 1, seen);
      if (result !== false) {
          ans.push(result);
      } else {
          ans.push(-1);
      }
  }
  return ans;
};

function dfs(adjList, src, curr, dest, answers, seen) {
  if (!adjList.has(src) || !adjList.has(dest)) {
      return -1;
  }
  if (src === dest) return 1;
  if (curr === dest) return answers;
  let neighbors = adjList.get(curr);
  seen.add(curr);
  for (let i = 0; i < neighbors.length; i++) {
      if (!seen.has(neighbors[i][0])) {
          let result = dfs(adjList, src, neighbors[i][0], dest, answers * neighbors[i][1], seen);
          if (result) return result;
      }
  }
  return false;
}
