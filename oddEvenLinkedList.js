// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

var oddEvenList = function(head) {
  if (head === null) return head;
  let even = head;
  let odd = head.next;
  let oddHead = odd;
  while (odd && odd.next) {
      even.next = odd.next;
      odd.next = odd.next.next;
      even = even.next;
      odd = odd.next;
  }
  even.next = oddHead;
  return head;
};
