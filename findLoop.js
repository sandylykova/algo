// Write a function that takes in the head of a Singly Linked List that contains a loop (in other words, the list's tail node points to some node in the list instead of Node/null. ). The function should return the node (the actual node--not just its value) from which the loop originates in constant space.

// Solution 1 O(n) time | O(n) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let seen = new Set();
	while (head !== null) {
		if (seen.has(head)) return head;
		seen.add(head);
		head = head.next;
	}
}


