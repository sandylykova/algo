// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:

// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// One must use all the tickets once and only once.

// Example 1:

// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.

// Solution 1

var findItinerary = function(tickets) {
  let map = {};
  for (let ticket of tickets) {
      let location = ticket[0];
      let destination = ticket[1];
      if (location in map) {
          map[location].push(destination);
      } else {
          map[location] = [destination];
      }
  }
  for (let destination in map) {
      map[destination].sort();
  }
  let result = [];
  function traverse(node) {
      let destinations = map[node];
      while (destinations && destinations.length > 0) {
          traverse(destinations.shift());
      }
      result.push(node);
  }
  traverse('JFK');
  return result.reverse();
};
