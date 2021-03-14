// 846. Hand of Straights

// Alice has a hand of cards, given as an array of integers.

// Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

// Return true if and only if she can.

// Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Solution 1

var isNStraightHand = function(hand, W) {
  if (hand.length % W !== 0) return false;
  let freqMap = new Map();
  let min = Infinity;
  for (let num of hand) {
      freqMap.set(num, freqMap.get(num) + 1 || 1);
      min = Math.min(min, num);
  }
  while (freqMap.size > 0) {
      for (let i = 0; i < W; i++) {
          if (freqMap.has(min)) freqMap.set(min, freqMap.get(min) - 1);
          else return false;
          if (freqMap.get(min) === 0) freqMap.delete(min);
          min++;
      }
      min = getMin(freqMap);
  }
  return true;
};
function getMin(map) {
  let min = Infinity;
  for (let [key, val] of map) {
      min = Math.min(min, key);
  }
  return min;
}
