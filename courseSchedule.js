// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Solution 1

var canFinish = function(numCourses, prerequisites) {
  if (prerequisites.length === 0) return true;
  let indegrees = new Array(numCourses).fill(0);
  let adjList = {};
  let nodesWithZeroIncoming = [];
  for (let i = 0; i < prerequisites.length; i++) {
      let prereq = prerequisites[i];
      indegrees[prereq[0]]++;
      if (! (prereq[1] in adjList)) {
          adjList[prereq[1]] = [];
      }
      adjList[prereq[1]].push(prereq[0]);
  }
  for (let i = 0; i < indegrees.length; i++) {
      if (indegrees[i] === 0) {
          nodesWithZeroIncoming.push(i);
      }
  }
  while (nodesWithZeroIncoming.length > 0) {
      let node = nodesWithZeroIncoming.pop();
      let dependecies = adjList[node];
      for (let i = 0; dependecies && i < dependecies.length; i++) {
          if (--indegrees[dependecies[i]] === 0) nodesWithZeroIncoming.push(dependecies[i]);
      }
  }
  for (let i = 0; i < indegrees.length; i++) {
      if (indegrees[i] !== 0) return false;
  }
  return true;
};

// Solution 2 DFS O(n) time | O(n) space

var canFinish = function(numCourses, prerequisites) {
    let graph = buildGraph(prerequisites);
    let visited = new Set();
    let visiting = new Set();
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return false;
    }
    function dfs(current) {
        if (visited.has(current)) return false;
        if (visiting.has(current)) return true;
        visiting.add(current);
        let neighbors = graph.get(current);
        for (let i = 0; neighbors && i < neighbors.length; i++) {
            if (dfs(neighbors[i])) return true;
        }
        visiting.delete(current);
        visited.add(current);
        return false;
    }
    return true;
};

function buildGraph(prerequisites) {
    let map = new Map();
    for (let [course, prerequisite] of prerequisites) {
        if (!map.has(course)) map.set(course, []);
        map.get(course).push(prerequisite);
    }
    return map;
}
