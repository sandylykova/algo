// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

// Input: costs = [[10,20],[30,200],[400,50],[30,20]]
// Output: 110
// Explanation:
// The first person goes to city A for a cost of 10.
// The second person goes to city A for a cost of 30.
// The third person goes to city B for a cost of 50.
// The fourth person goes to city B for a cost of 20.

// The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.

// Input: costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
// Output: 1859

// Solution 1 O(nlog(n)) time | O(1) space

var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let limit = costs.length / 2;
  let minCostA = 0;
  let minCostB = 0;
  for (let i = 0; i < limit; i++) {
      minCostA+=costs[i][0];
  }
  for (let i = limit; i < costs.length; i++) {
      minCostB+=costs[i][1];
  }
  return minCostA + minCostB;
};

// Solution 2 O(nlog(n)) time | O(1) space

var twoCitySchedCost = function(costs) {
  if (!costs || costs.length === 0) return 0;
  // sorting
  // O(nlog(n))
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  let minSum = 0;
  // O(n)
  for (let i = 0; i < costs.length; i++) {
      if (i < costs.length / 2) {
        minSum += costs[i][0];
      } else {
        minSum += costs[i][1];
      }
  }
  return minSum;
};
