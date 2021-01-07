// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Solution 1 merging lists one by one: time O(kN) where k is the number of linked lits | space O(1)

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
      let first = lists.shift();
      let second = lists.shift();
      let merged = mergeTwo(first, second);
      lists.push(merged);
  }
  return lists[0];
};

function mergeTwo(list1, list2) {
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  while (list1 && list2) {
      if (list1.val < list2.val) {
          cur.next = list1;
          list1 = list1.next;
      } else {
          cur.next = list2;
          list2 = list2.next;
      }
      cur = cur.next;
  }
  if (list1 !== null) {
      cur.next = list1;
  } else if (list2 !== null) {
      cur.next = list2;
  }
  return dummyHead.next;
}

// Solution 2 divide and conquer

var mergeKLists = function(lists) {
    if (!lists || !lists.length) return null;
    let amount = lists.length;
    while (amount > 1) {
        for (let i = 0; i < Math.floor(amount / 2); i++) {
            lists[i] = mergeTwo(lists[i], lists[amount -  1 - i]);
        }
        amount = Math.ceil(amount / 2);
        // or amount = Math.floor((amount + 1) / 2);
    }
    return lists[0];
};

function mergeTwo(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let dummyHead = new ListNode(0);
    let cur = dummyHead;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    if (list1 !== null) {
        cur.next = list1;
    } else if (list2 !== null) {
        cur.next = list2;
    }
    return dummyHead.next;
}
