// 1423. Maximum Points You Can Obtain from Cards

// There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// Input: cardPoints = [1,2,3,4,5,6,1], k = 3
// Output: 12
// Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.

// Solution 1 O(n) time | O(1) space

var maxScore = function(cardPoints, k) {
  let i = 0;
  let j = cardPoints.length - 1;
  let sum = 0;
  let counter = k;
  while (counter > 0) {
      sum += cardPoints[i];
      i++;
      counter--;
  }
  i--;
  let maxSum = sum;
  while (i >= 0 ) {
      sum = sum - cardPoints[i] + cardPoints[j];
      maxSum = Math.max(sum, maxSum);
      i--;
      j--;
  }
  return maxSum;
};
