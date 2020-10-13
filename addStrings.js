// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Solution 1 O(max(n, m)) time | O(max(n, m)) space;

var addStrings = function(num1, num2) {
  let res = [];
  let helper = 0;
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let n1;
  let n2;
  while (p1 >= 0 || p2 >= 0) {
      if (!num1[p1]) n1 = 0;
      if (num1[p1]) n1 = +num1[p1];
      if (!num2[p2]) n2 = 0;
      if (num2[p2]) n2 = +num2[p2];
      let val = (n1 + n2 + helper) % 10;
      helper = Math.floor((n1 + n2 + helper) / 10);
      res.push(val);
      p1--;
      p2--;
  }
  if (helper) res.push(helper);
  let sum = "";
  for (let i = res.length - 1; i >= 0; i--) {
      sum += res[i];
  }
  return sum;
};
