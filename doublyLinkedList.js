class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    let counter;
    let cur;
    if (index < middle) {
      counter = 0;
      cur = this.head;
      while (counter < index) {
        cur = cur.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      cur = this.tail;
      while (counter > index) {
        cur = cur.prev;
        counter--;
      }
    }
    return cur;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    let newNode = new Node(val);
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removedNode = this.get(index);
    if (removedNode) {
      let beforeNode = removedNode.prev;
      let afterNode = removedNode.next;
      beforeNode.next = afterNode;
      afterNode.prev = beforeNode;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
  }
}
