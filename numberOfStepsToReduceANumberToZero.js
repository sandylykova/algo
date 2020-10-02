// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Solution 1 using recursion

var numberOfSteps1 = function(num, steps = 0) {
  if (num === 0) return steps;
  if (num % 2 === 0) return numberOfSteps1(num/2, steps + 1);
  else {
      return numberOfSteps1(num - 1, steps + 1);
  }
};

// Solution 2 iterative solution

var numberOfSteps2  = function(num) {
  let steps = 0;
  while (num > 0) {
    steps++;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
  }
  return steps;
};
