// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


var reverse = function(x) {
  let result;
  let finalResult = 0;
  let sign = Math.sign(x);
  x = x * sign;
  while (x > 0) {
      result = x % 10;
      finalResult += result;
      if (x > 9) finalResult *= 10;
      x = Math.floor(x / 10);
  }
  let final = finalResult*sign;
   if (final >= Math.pow(2, 31) - 1 || final <= Math.pow(-2, 31)) return 0;
  return final;
};
