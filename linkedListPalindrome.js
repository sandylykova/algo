// AlgoExpert: Linked List Palindrome
// Difficulty: very hard

// Solution 1 O(n) time | O(1) space

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
  let slow = head;
	let fast = head;
	let len = 0;
	while (fast && fast.next) {
		len++;
		slow = slow.next;
		fast = fast.next.next;
	}
	slow = reverseLinkedList(slow);
	let p1 = head;
	let p2 = slow;
	while (len > 0) {
		if (p1.value !== p2.value) {
			return false;
		}
		p1 = p1.next;
		p2 = p2.next;
		len--;
	}
	slow = reverseLinkedList(slow);
  return true;
}

function reverseLinkedList(node) {
	let prev = null;
	while (node) {
		let temp = node.next;
		node.next = prev;
		prev = node;
		node = temp;
	}
	return prev;
}
