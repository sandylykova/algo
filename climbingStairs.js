// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Solution 1 O(n) time | O(n) space

var climbStairs = function(n) {
  function countStairs(stairsRemaining, savedResults) {
      if (stairsRemaining < 0) return 0;
      if (stairsRemaining === 0) return 1;
      if (savedResults[stairsRemaining]) {
          return savedResults[stairsRemaining];
      }
      savedResults[stairsRemaining] = countStairs(stairsRemaining - 1, savedResults) + countStairs(stairsRemaining - 2, savedResults);
      return savedResults[stairsRemaining];
  }
  return countStairs(n, {});
};
