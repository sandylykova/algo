// Array implementation

Array.unshift(val) | Array.pop();
Array.push(val) | Array.shift();

// Linked list implementation

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeue() {
    if (this.first === null) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    let dequeued = this.first;
    this.first = this.first.next;
    this.size--;
    return dequeued;
  }
}
