// 1001. Grid Illumination

// You are given a grid of size N x N, and each cell of this grid has a lamp that is initially turned off.

// You are also given an array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.

// Finally, you are given a query array queries, where queries[i] = [rowi, coli]. For the ith query, determine whether grid[rowi][coli] is illuminated or not. After answering the ith query, turn off the lamp at grid[rowi][coli] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowi][coli].

// Return an array of integers ans, where ans[i] should be 1 if the lamp in the ith query was illuminated, or 0 if the lamp was not.

// Input: N = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
// Output: [1,1]

// Solution 1

var gridIllumination = function(N, lamps, queries) {
  let rowMap = {};
  let colMap = {};
  let firstDiag = {};
  let secondDiag = {};
  let lampSet = new Set();
  for (let lamp of lamps) {
      let [x, y] = lamp;
      let key = `${x}-${y}`;
      if (!lampSet.has(key)) {
          lampSet.add(key);
          rowMap[x] = (rowMap[x] || 0) + 1;
          colMap[y] = (colMap[y] || 0) + 1;
          firstDiag[x + y] = (firstDiag[x + y] || 0) + 1;
          secondDiag[x - y] = (secondDiag[x - y] || 0) + 1;
      }
  }
  let ans = [];
  for (let query of queries) {
      let [x, y] = query;
      if (rowMap[x] > 0 || colMap[y] > 0 || firstDiag[x + y] > 0 || secondDiag[x - y] > 0) {
          ans.push(1);
          for (let i = x - 1; i <= x + 1; i++) {
              for (let j = y - 1; j <= y + 1; j++) {
                  let key = `${i}-${j}`;
                  if (lampSet.has(key)) {
                      lampSet.delete(key);
                      rowMap[i]--;
                      colMap[j]--;
                      firstDiag[i + j]--;
                      secondDiag[i - j]--;
                  }
              }
          }
      } else {
          ans.push(0);
      }
  }
  return ans;
};
