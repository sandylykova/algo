// AlgoExpert: Remove Kth Node From End
// Difficulty: medium

// Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.

// The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created).

// Furthermore, the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed. In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.

// Note that your function doesn't need to return anything.

// You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.

// head = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
// k = 4

// output = 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Solution 1 O(n) time | O(1) space

function removeKthNodeFromEnd(head, k) {
  let first = head;
  let counter = 1;
  while (k >= counter) {
		first = first.next;
		counter++;
	}
	if (first === null) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	let second = head;
	while (first.next !== null) {
		first = first.next;
		second = second.next;
	}
	second.next = second.next.next;
}

// Solution 2 with edge cases

var removeNthFromEnd = function(head, n) {
  let first = head;
  let second = head;
  let counter = 0;
  let returned = second;
  while (n > counter) {
      first = first.next;
      counter++;
  }
  if (first === null) {
      return second.next;
  }
  while (first.next) {
      first = first.next;
      second = second.next;
  }
  second.next = second.next.next;
  return returned;
};

// Solution 3 O(n) time | O(1) space

function removeKthNodeFromEnd(head, k) {
	let len = 1;
	let node = head;
	while (node) {
		node = node.next;
		len++;
	}
	node = head;
	let kthLen = len - k - 1;
	if (kthLen === 0) {
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	let curr = 1;
	while (curr !== kthLen) {
		node = node.next;
		curr++;
	}
	node.next = node.next.next;
}
