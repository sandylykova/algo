// 973. K Closest Points to Origin

// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// Input: points = [[1,3],[-2,2]], K = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

// Solution 1 O(nlog(n)) time | O(n) space

var kClosest = function(points, K) {
  if (K >= points.length) return points;
  let distances = [];
  for (let point of points) {
      distances.push(getDistance(point));
  }
  distances.sort((a, b) => a - b);
  let ans = [];
  let smallestK = distances[K - 1];
  for (let i = 0; i < points.length; i++) {
      if (getDistance(points[i]) <= smallestK) {
          ans.push(points[i]);
      }
  }
  return ans;
};

function getDistance(point) {
  return point[0] * point[0] + point[1] * point[1];
}
