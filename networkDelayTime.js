// 743. Network Delay Time

// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

// Solution 1 using DFS

var networkDelayTime = function(times, n, k) {
  let graph = buildGraph(times);
  for (let [key, val] of graph) {
      graph.get(key).sort((a, b) => a[1] - b[1]);
  }
  let mins = new Array(n + 1).fill(Infinity);
  let time = -Infinity;
  function dfs(current, distance) {
      if (distance >= mins[current]) return;
      mins[current] = distance;
      let neighbors = graph.get(current);
      for (let i = 0; neighbors && i < neighbors.length; i++) {
          let [neighbor, time] = neighbors[i];
          dfs(neighbor, distance + time);
      }
  }
  dfs(k, 0);
  for (let i = 1; i < mins.length; i++) {
      if (mins[i] === Infinity) return -1;
      time = Math.max(time, mins[i]);
  }
  return time;
};

function buildGraph(times) {
  let map = new Map();
  for (let [from, to, time] of times) {
      if (!map.get(from)) map.set(from, []);
      map.get(from).push([to, time]);
  }
  return map;
}
