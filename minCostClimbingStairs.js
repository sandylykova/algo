// 746. Min Cost Climbing Stairs

// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

// Solution 1 O(n) time | O(n) space

var minCostClimbingStairs = function(cost) {
  let costs = new Array(cost.length).fill(0);
  costs[0] = cost[0];
  costs[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
      costs[i] = Math.min(cost[i] + costs[i - 1], cost[i] + costs[i - 2]);
  }
  return Math.min(costs[costs.length - 2], costs[costs.length - 1]);
};

// Solution 2 O(n) time | O(1) space

var minCostClimbingStairs = function(cost) {
  let minCostOneStepBefore = cost[1];
  let minCostTwoStepsBefore = cost[0];
  for (let i = 2; i < cost.length; i++) {
      let current = Math.min(cost[i] + minCostTwoStepsBefore, cost[i] + minCostOneStepBefore);
      minCostTwoStepsBefore = minCostOneStepBefore;
      minCostOneStepBefore = current;
  }
  return Math.min(minCostOneStepBefore, minCostTwoStepsBefore);
};
