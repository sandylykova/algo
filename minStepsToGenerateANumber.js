// Given an int n. You can use only 2 operations:

// multiply by 2
// integer division by 3 (e.g. 10 / 3 = 3)
// Find the minimum number of steps required to generate n from 1.

// Input: 10
// Output: 6
// Explanation: 1 * 2 * 2 * 2 * 2 / 3 * 2
// 6 steps required, as we have used 5 multiplications by 2, and one division by 3.

// Solution 1

function minNumberOfStepsToGenerateNumber(num) {
  let q = [1];
  let numOfSteps = 0;
  while (q.length > 0) {
    let len = q.length;
    numOfSteps++;
    for (let i = 0; i < len; i++) {
      let curr = q.shift();
      let multipliedByTwo = curr * 2;
      let dividedByTree = Math.floor(curr / 3);
      if (multipliedByTwo === num || dividedByTree === num) {
        return numOfSteps;
      }
    q.push(multipliedByTwo);
    if (dividedByTree > 0) q.push(dividedByTree);
    }
  }
  return numOfSteps;
}
