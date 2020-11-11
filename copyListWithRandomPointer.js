// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Solution 1 O(n) time | O(n) space

var copyRandomList = function(head) {
  if (head === null) return head;
  let clones = new Map();
  let node = head;
  while (node) {
      clones.set(node, new Node(node.val));
      node = node.next;
  }
  node = head;
  while (node) {
      clones.get(node).next = clones.get(node.next) || null;
      clones.get(node).random = clones.get(node.random) || null;
      node = node.next;
  }
  return clones.get(head);
};
