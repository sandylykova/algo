// 216. Combination Sum III

// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Explanation:
// 1 + 2 + 4 = 7
// There are no other valid combinations.

// Solution 1 with extra space for numbers array

var combinationSum3 = function(k, n) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = [];
  function backtrack(remaining, curr, index) {
      if (remaining < 0) return;
      if (remaining === 0 && curr.length === k) {
          result.push(curr.slice());
      }
      if (curr.length > k) return;
      for (let i = index; i < numbers.length; i++) {
          curr.push(numbers[i]);
          let newRemaining = remaining - numbers[i];
          backtrack(newRemaining, curr, i + 1);
          curr.pop();
      }
  }
  backtrack(n, [], 0);
  return result;
};

// Solution 2 without extra space

var combinationSum3 = function(k, n) {
  let result = [];
  function backtrack(remaining, curr, index) {
      if (remaining < 0) return;
      if (remaining === 0 && curr.length === k) {
          result.push(curr.slice());
      }
      if (remaining !== 0 && curr.length === k) return;
      for (let i = index; i < 9; i++) {
          curr.push(i + 1);
          let newRemaining = remaining - i - 1;
          backtrack(newRemaining, curr, i + 1);
          curr.pop();
      }
  }
  backtrack(n, [], 0);
  return result;
};
