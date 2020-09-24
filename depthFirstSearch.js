// You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure. Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names in the input array, and returns it.

// O(v + e) time | O(v) space
// v - the number of vertices of the input graph
// e - the number of edges of the input graph

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		array.push(this.name);
		for (const child of this.children) {
			child.depthFirstSearch(array);
		}
		return array;
  }
}
