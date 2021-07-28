// 1387. Sort Integers by The Power Value

// The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:

// if x is even then x = x / 2
// if x is odd then x = 3 * x + 1
// For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).

// Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.

// Return the k-th integer in the range [lo, hi] sorted by the power value.

// Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in 32 bit signed integer.

// Solution 1

var getKth = function(lo, hi, k) {
  let memo = new Map();
  let vals = [];
  for (let i = hi; i >= lo; i--) {
      let value = recursive(i);
      vals.push([value, i]);
  }
  function recursive(val) {
      if (memo.has(val)) return memo.get(val);
      if (val === 1) return 0;
      let result;
      if (val % 2 === 0) {
          result = recursive(val / 2) + 1;
      } else {
          result =  recursive(3 * val + 1) + 1;
      }
      memo.set(val, result);
      return result;
  }
  vals.sort((a, b) => {
      if (a[0] <  b[0]) return -1;
      else if (a[0] > b[0]) return 1;
      else if (a[0] === b[0]) {
          if (a[1] < b[1]) return -1;
          else return 1;
      } else return 0;
  });
  return vals[k - 1][1];
};
