// 210. Course Schedule II

// There are a total of n courses you have to take labelled from 0 to n - 1.

// Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

// Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

// If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

// Solution 1

var findOrder = function(numCourses, prerequisites) {
  let indegrees = new Array(numCourses).fill(0);
  let adjList = {};
  for (let i = 0; i < prerequisites.length; i++) {
      let prereq = prerequisites[i];
      indegrees[prereq[0]]++;
      if (!(prereq[1] in adjList)) {
          adjList[prereq[1]] = [];
      }
      adjList[prereq[1]].push(prereq[0]);
  }
  let withoutIndegrees = [];
  for (let i = 0; i < indegrees.length; i++) {
      if (indegrees[i] === 0) {
          withoutIndegrees.push(i);
      }
  }
  let topologicalSort = [];
  while (withoutIndegrees.length > 0) {
      let node = withoutIndegrees.pop();
      topologicalSort.push(node);
      let courses = adjList[node];
      for (let i = 0; courses && i < courses.length; i++) {
          if (--indegrees[courses[i]] === 0) withoutIndegrees.push(courses[i]);
      }
  }
  return topologicalSort.length === numCourses ? topologicalSort : [];
};
