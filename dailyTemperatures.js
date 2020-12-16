// 739. Daily Temperatures

// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// Solution 1 O(n^2) time | O(1) space

var dailyTemperatures = function(T) {
  let ans = [];
  for (let i = 0; i < T.length - 1; i++) {
      for (let j = i + 1; j < T.length; j++) {
          if (T[i] < T[j]) {
              ans[i] = j - i;
              break;
          }
      }
      if (ans[i] === undefined) ans[i] = 0;
  }
  ans.push(0);
  return ans;
};

// Solution 2 O(n) time | O(n) space

var dailyTemperatures = function(T) {
  const result = Array(T.length).fill(0);
  const stack = [];

  for(let i = 0; i < T.length; i++) {
      let top = stack[stack.length-1];

      while (stack.length && T[top] < T[i]) {
          const idx = stack.pop();
          result[idx] = i - idx;
          top = stack[stack.length-1];
      }
      stack.push(i);
  }
  return result;
};
