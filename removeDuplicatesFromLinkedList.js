// AlgoExpert: Remove Duplicates From Linked List
// Difficulty: easy

// Solution 1

function removeDuplicatesFromLinkedList(linkedList) {
	if (linkedList === null || linkedList.next === null) return linkedList;
	let node = linkedList;
  while (node) {
		let nextNode = node.next;
		while (nextNode !== null && nextNode.value === node.value) {
			nextNode = nextNode.next;
		}
		node.next = nextNode;
		node = nextNode;
	}
  return linkedList;
}
