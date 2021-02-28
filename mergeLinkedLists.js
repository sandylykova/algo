// AlgoExpert: Merge Linked Lists In Place
// Difficulty: hard

// Solution 1 O(n + m) time | O(1) space - where n is the number of nodes in first linked list and m is the number of nodes in second linked list

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
  let prev = null;
	let p1 = headOne;
	let p2 = headTwo;
	while (p1 && p2) {
		if (p1.value < p2.value) {
			prev = p1;
			p1 = p1.next;
		} else {
			if (prev !== null) prev.next = p2;
			prev = p2;
			p2 = p2.next;
			prev.next = p1;
		}
	}
	if (p2) prev.next = p2;
	return headOne.value < headTwo.value ? headOne : headTwo;
}
