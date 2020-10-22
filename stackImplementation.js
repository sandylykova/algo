// Array implementation

Array.push(val) | Array.pop();
Array.unshift(val) | Array.shift();

// Linked list implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    // but adding to the beginning!
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;

    return this;
  }
  pop() {
    // but removing from the beginning!
    if (this.first === null) return null;
    let popped = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return popped.val;
  }
}

