// 679. 24 Game

// You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24.

// You are restricted with the following rules:

// The division operator '/' represents real division, not integer division.
// For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
// Every operation done is between two numbers. In particular, we cannot use '-' as a unary operator.
// For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
// You cannot concatenate numbers together
// For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.
// Return true if you can get such expression that evaluates to 24, and false otherwise.

// Input: cards = [4,1,8,7]
// Output: true
// Explanation: (8-4) * (7-1) = 24

// Solution 1

var judgePoint24 = function(cards) {
  cards = cards.map(num => Number(num.toFixed(4)));
  const computeTwoNums = (num1, num2) => {
      return [num1 + num2, num1 - num2, num2 - num1, num1 * num2, num1 / num2, num2 / num1];
  };
  function recursive(arr) {
      if (arr.length === 1) {
          if (Math.abs(24 - arr[0]) < 0.001) {
              return true;
          }
          return false;
      }
      for (let i = 0; i < arr.length - 1; i++) {
          for (let j = i + 1; j < arr.length; j++) {
              let newArr = [];
              for (let k = 0; k < arr.length; k++) {
                  if (k !== i && k !== j) {
                      newArr.push(arr[k]);
                  }
              }
              for (let val of computeTwoNums(arr[i], arr[j])) {
                  newArr.push(val);
                  if (recursive(newArr)) return true;
                  else newArr.pop();
              }
          }
      }
      return false;
  }
  return recursive(cards);
};
