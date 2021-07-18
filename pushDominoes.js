// 838. Push Dominoes

// There are N dominoes in a line, and we place each domino vertically upright.

// In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

// After each second, each domino that is falling to the left pushes the adjacent domino on the left.

// Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

// When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

// For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

// Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

// Return a string representing the final state.

// Input: ".L.R...LR..L.."
// Output: "LL.RR.LLRRLL.."

// Solution 1 O(n) time | O(n) space

var pushDominoes = function(dominoes) {
  if (!dominoes || !dominoes.length) return dominoes;
  let balances = [];
  let balance = 0;
  let n = dominoes.length;
  for (let i = 0; i < n; i++) {
      if (dominoes[i] === 'R') {
          balance = n;
      } else if (dominoes[i] === 'L') {
          balance = 0;
      } else {
          balance = Math.max(0, balance - 1);
      }
      balances[i] = balance;
  }
  for (let i = n - 1; i >= 0; i--) {
      if (dominoes[i] === 'L') {
          balance = n;
      } else if (dominoes[i] === 'R') {
          balance = 0;
      } else {
          balance = Math.max(0, balance - 1);
      }
      balances[i] -= balance;
  }
  let result = [];
  for (let value of balances) {
      if (value > 0) {
          result.push('R');
      } else if (value < 0) {
          result.push('L');
      } else {
          result.push('.');
      }
  }
  return result.join('');
};
