// Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Solution 1 O(logn) time | O(logn) space

const fastPower = (num, power) => {
  if (power === 0) return 1;
  let half = fastPower(num, Math.floor(power / 2));
  if (power % 2 === 0) {
      return half * half;
  } else {
      return half * half * num;
  }
};

var myPow = function(x, n) {
  let power = n;
  if (power < 0) {
      x = 1 / x;
      power = -power;
  }
  return fastPower(x, power);
};

// Solution 2 O(logn) time | O(1) space

var myPow = function(x, n) {
  let power = n;
  if (power < 0) {
      x = 1 / x;
      power = -power;
  }
  let ans = 1;
  let curr = x;
  for (let i = power; i > 0; i = Math.floor(i / 2)) {
      if (i % 2 === 1) {
          ans *= curr;
      }
      curr *= curr;
  }
  return ans;
};
