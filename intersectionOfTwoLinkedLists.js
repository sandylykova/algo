// Write a program to find the node at which the intersection of two singly linked lists begins.

// Solution 1

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headB;
    }
    if (p2 === null) {
      p2 = headA;
    }
    if (p1 === p2) {
      return p1;
    }
     p1 = p1.next;
     p2 = p2.next;
  }

  return p1;
};

// Solution 2

const getIntersectionNode = (headA, headB) => {
  const seen = new Set();
  while (headA) {
      seen.add(headA);
      headA = headA.next;
  }
  while (headB) {
      if (seen.has(headB)) {
          return headB;
      }
      headB = headB.next;
  }
  return null;
};
