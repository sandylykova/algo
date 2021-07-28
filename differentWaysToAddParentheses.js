// 241. Different Ways to Add Parentheses

// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

// Solution 1

var diffWaysToCompute = function(expression) {
  let result = [];
  for (let i = 0; i < expression.length; i++) {
      let char = expression[i];
      if (char === '+' || char === '*' || char === '-') {
          let a = expression.slice(0, i);
          let b = expression.slice(i + 1);
          let valsA = diffWaysToCompute(a);
          let valsB = diffWaysToCompute(b);
          for (let val1 of valsA) {
              for (let val2 of valsB) {
                  if (char === '+') {
                      result.push(val1 + val2);
                  } else if (char === '*') {
                      result.push(val1 * val2);
                  } else {
                      result.push(val1 - val2);
                  }
              }
          }
      }
  }
  if (result.length === 0) result.push(Number(expression));
  return result;
};

// Solution 2 with memoization

let map = new Map();
var diffWaysToCompute = function(expression) {
    if (map.has(expression)) return map.get(expression);
    let result = [];
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (char === '+' || char === '*' || char === '-') {
            let a = expression.slice(0, i);
            let b = expression.slice(i + 1);
            let valsA = diffWaysToCompute(a);
            let valsB = diffWaysToCompute(b);
            for (let val1 of valsA) {
                for (let val2 of valsB) {
                    if (char === '+') {
                        result.push(val1 + val2);
                    } else if (char === '*') {
                        result.push(val1 * val2);
                    } else {
                        result.push(val1 - val2);
                    }
                }
            }
        }
    }
    if (result.length === 0) result.push(Number(expression));
    map.set(expression, result);
    return result;
};
