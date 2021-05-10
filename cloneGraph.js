// 133. Clone Graph

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

// Solution 1 O(v + e) time | O(v) space

var cloneGraph = function(node) {
  if (!node) return node;
  let clone = new Map();
  let stack = [node];
  clone.set(node.val, new Node(node.val));
  while (stack.length > 0) {
      let curr = stack.pop();
      let children = curr.neighbors;
      for (let i = 0; children && i < children.length; i++) {
          let child = children[i];
          if (!clone.has(child.val)) {
              clone.set(child.val, new Node(child.val));
              stack.push(child);
          }
          clone.get(curr.val).neighbors.push(clone.get(child.val));
      }
  }
  return clone.get(node.val);
};
