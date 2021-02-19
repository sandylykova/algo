// AlgoExpert: Sum of Linked Lists
// Difficulty: medium

// Solution 1 O(max(n, m)) time | O(max(n, m)) space - where n is the length of the first linked list and m is the length of the second linked list

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	let sumLinkedList = new LinkedList(0);
	let dummyHead = sumLinkedList;
	let carry = 0;
	while (linkedListOne || linkedListTwo) {
		let val1 = linkedListOne ? linkedListOne.value : 0;
		let val2 = linkedListTwo ? linkedListTwo.value : 0;
		let sum = val1 + val2 + carry;
		carry = Math.floor(sum / 10);
		sum = sum % 10;
		sumLinkedList.next = new LinkedList(sum);
		sumLinkedList = sumLinkedList.next;
		linkedListOne = linkedListOne ? linkedListOne.next : null;
		linkedListTwo = linkedListTwo ? linkedListTwo.next : null;
	}
	if (carry) {
		sumLinkedList.next = new LinkedList(carry);
	}
  return dummyHead.next;
}
