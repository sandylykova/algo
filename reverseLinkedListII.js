// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.

// Input: 1->2->3->4->5->NULL, m = 2, n = 4
// Output: 1->4->3->2->5->NULL

// Solution 1

var reverseBetween = function(head, m, n) {
  let cur = head;
  let prev = null;
  while (m > 1) {
      prev = cur;
      cur = cur.next;
      m--;
      n--;
  }
  let p2 = cur;
  let p1 = prev;
  while (n > 0) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      n--;
  }
  if (p1 !== null) {
      p1.next = prev;
  } else {
      head = prev;
  }
  p2.next = cur;
  return head;
};

// Solution 2

var reverseBetween = function(head, m, n) {
    let cur = head;
    let arr = [];
    while (cur !== null) {
        arr.push(cur.val);
        cur = cur.next;
    }
    let copy = arr.slice(m - 1, n).reverse();
    let beg = arr.slice(0, m - 1);
    let end = arr.slice(n);
    let newArr = [...beg, ...copy, ...end];
    let dummyHead = new ListNode(0);
    let node = dummyHead;
    let i = 0;
    while (i < newArr.length) {
        node.next = new ListNode(newArr[i]);
        i++;
        node = node.next;
    }
    return dummyHead.next;
};
