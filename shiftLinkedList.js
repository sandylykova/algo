// Write a function that takes in the head of a Singly Linked List and an integer k, shifts the list in place (i.e., doesn't create a brand new list) by k positions, and returns its new head. Shifting a Linked List means moving its nodes forward or backward and wrapping them around the list where appropriate. For example, shifting a Linked List forward by one position would make its tail become the new head of the linked list.Whether nodes are moved forward or backward is determined by whether k is positive or negative.

// Input:  0 -> 1 -> 2 -> 3 -> 4 -> 5, k = 2
// Output: 4 -> 5 -> 0 -> 1 -> 2 -> 3

// Solution 1 O(n) time | O(1) space

function shiftLinkedList(head, k) {
	let tail = head;
	let len = 1;
	while (tail.next !== null) {
		tail = tail.next;
		len += 1;
	}
	let newK = Math.abs(k) % len;
	if (newK === 0) return head;
	let newHeadPosition = k > 0 ? len - newK : newK;
	let node = head;
	while (newHeadPosition > 1) {
		node = node.next;
		newHeadPosition -= 1;
	}
	tail.next = head;
	let newHead = node.next;
	node.next = null;
	return newHead;
}
