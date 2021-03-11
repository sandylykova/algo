// 1136. Parallel Courses

// You are given an integer n which indicates that we have n courses, labeled from 1 to n. You are also given an array relations where relations[i] = [a, b], representing a prerequisite relationship between course a and course b: course a has to be studied before course b.

// In one semester, you can study any number of courses as long as you have studied all the prerequisites for the course you are studying.

// Return the minimum number of semesters needed to study all courses. If there is no way to study all the courses, return -1.

// Input: n = 3, relations = [[1,3],[2,3]]
// Output: 2
// Explanation: In the first semester, courses 1 and 2 are studied. In the second semester, course 3 is studied.

// Solution 1

var minimumSemesters = function(n, relations) {
  let indegrees = new Array(n + 1).fill(0);
  let adjList = {};
  for (let i = 0; i < relations.length; i++) {
      let rel = relations[i];
      indegrees[rel[1]]++;
      if (adjList[rel[0]] === undefined) {
          adjList[rel[0]] = [];
      }
      adjList[rel[0]].push(rel[1]);
  }
  let nodesWithZeroIndegrees = [];
  for (let i = 1; i < indegrees.length; i++) {
      if (indegrees[i] === 0) {
          nodesWithZeroIndegrees.push(i);
      }
  }
  let topologicalSort = [];
  let numOfSemesters = 0;
  while (nodesWithZeroIndegrees.length > 0) {
      let len = nodesWithZeroIndegrees.length;
      numOfSemesters++;
      for (let i = 0; i < len; i++) {
          let curr = nodesWithZeroIndegrees.shift();
          topologicalSort.push(curr);
          let dependecies = adjList[curr];
          for (let i = 0; dependecies && i < dependecies.length; i++) {
              if (--indegrees[dependecies[i]] === 0) {
                  nodesWithZeroIndegrees.push(dependecies[i]);
              }
          }
      }
  }
  return topologicalSort.length === n ? numOfSemesters : -1;
};
