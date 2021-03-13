// 780. Reaching Points

// A move consists of taking a point (x, y) and transforming it to either (x, x+y) or (x+y, y).

// Given a starting point (sx, sy) and a target point (tx, ty), return True if and only if a sequence of moves exists to transform the point (sx, sy) to (tx, ty). Otherwise, return False.

// Input: sx = 1, sy = 1, tx = 3, ty = 5
// Output: True
// Explanation:
// One series of moves that transforms the starting point to the target is:
// (1, 1) -> (1, 2)
// (1, 2) -> (3, 2)
// (3, 2) -> (3, 5)

// Solution 1 O(log(max(tx, ty))) time | O(1) space

var reachingPoints = function(sx, sy, tx, ty) {
  while (sx < tx && sy < ty) {
      if (tx > ty) tx %= ty;
      else ty %= tx;
  }
  return sx === tx && sy <= ty && (ty - sy) % sx === 0 || sy === ty && sx <= tx && (tx - sx) % sy === 0;
};
