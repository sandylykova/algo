// AlgoExpert Cycle in graph
// Difficulty: medium

// You're given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.

// For the purpose of this question, a cycle is defined as any number of vertices, including just one vertex, that are connected in a closed chain. A cycle can also be defined as a chain of at least one vertex in which the first vertex is the same as the last.

// The given list is what's called an adjacency list, and it represents a graph. The number of vertices in the graph is equal to the length of edges, where each index i in edges contains vertex i's outbound edges, in no particular order. Each individual edge is represented by a positive integer that denotes an index (a destination vertex) in the list that this vertex is connected to. Note that these edges are directed, meaning that you can only travel from a particular vertex to its destination, not the other way around (unless the destination vertex itself has an outbound edge to the original vertex).

// Also note that this graph may contain self-loops. A self-loop is an edge that has the same destination and origin; in other words, it's an edge that connects a vertex to itself. For the purpose of this question, a self-loop is considered a cycle.

// Solution 1 O(e + v) time | O(e + v) space

function cycleInGraph(edges) {
	let visited = new Set();
	let visiting = new Set();
	let found = dfs(0, edges, visited, visiting);
	if (found) return true;
  return false;
}

function dfs(curr, edges, visited, visiting) {
	visited.add(curr);
	visiting.add(curr);
	let nodes = edges[curr];
	for (let node of nodes) {
		if (visiting.has(node)) return true;
		if (visited.has(node)) continue;
		let found = dfs(node, edges, visited, visiting);
		if (found) return true;
	}
	visiting.delete(curr);
	return false;
}
