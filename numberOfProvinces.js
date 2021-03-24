// 547. Number of Provinces

// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

// Solution 1 O(n^2) time | O(n) space

var findCircleNum = function(isConnected) {
  let province = 0;
  let visited = new Set();
  for (let i = 0; i < isConnected.length; i++) {
      if (!visited.has(i)) {
          dfs(i);
          province++;
      }
  }
  function dfs(i) {
      visited.add(i);
      for (let j = 0; j < isConnected.length; j++) {
          if (isConnected[i][j] === 1 && !visited.has(j)) {
              dfs(j);
          }
      }
  }
  return province;
};
