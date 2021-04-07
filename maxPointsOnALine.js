// 149. Max Points on a Line

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

// Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
// Output: 4

// Solution 1 O(n^2) time | O(n) space

var maxPoints = function(points) {
  let max = 1;
  for (let i = 0; i < points.length; i++) {
      let slopes = {};
      let p1 = points[i];
      let currentMax = 1;
      for (let j = i + 1; j < points.length; j++) {
          let p2 = points[j];
          let [rise, run] = getSlope(p1, p2);
          let key = `${rise}:${run}`;
          if (!(key in slopes)) {
              slopes[key] = 1;
          }
          slopes[key] += 1;
          currentMax = Math.max(currentMax, slopes[key]);
      }
      max = Math.max(max, currentMax);
  }
  return max;
};

function getSlope(p1, p2) {
  let [x1, y1] = p1;
  let [x2, y2] = p2;
  let slope = [1, 0];
  if (x1 !== x2) {
      let xDiff = x2 - x1;
      let yDiff = y2 - y1;
      let gcd = getGreatestCommonDivisor(Math.abs(xDiff), Math.abs(yDiff));
      xDiff = Math.floor(xDiff / gcd);
      yDiff = Math.floor(yDiff / gcd);
      if (xDiff < 0) {
          xDiff *= -1;
          yDiff *= -1;
      }
      slope = [yDiff, xDiff];
  }
  return slope;
}

function getGreatestCommonDivisor(num1, num2) {
  let a = num1;
  let b = num2;
  while (true) {
      if (a === 0) return b;
      if (b === 0) return a;
      let tempA = a;
      a = b;
      b = tempA % b;
  }
}
