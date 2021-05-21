// AlgoExpert: Zip Linked List
// Difficulty: very hard

// Solution 1 O(n) time | O(1) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function zipLinkedList(linkedList) {
	if (!linkedList || !linkedList.next || !linkedList.next.next) return linkedList;
	let slow = linkedList;
	let fast = linkedList;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let reversed = reverseLL(slow);
	let p1 = linkedList;
	let p2 = reversed;
	while (p1 && p2) {
		let n1 = p1.next;
		let n2 = p2.next;
		p1.next = p2;
		p2.next = n1;
		p1 = n1;
		p2 = n2;
	}
	if (p1) p1.next = null;
  return linkedList;
}

function reverseLL(node) {
	let prev = null;
	while (node) {
		let next = node.next;
		node.next = prev;
		prev = node;
		node = next;
	}
	return prev;
}
