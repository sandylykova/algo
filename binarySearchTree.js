class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right =null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let cur = this.root;
      while (true) {
        if (value === cur.value) return undefined;
        if (value < cur.value) {
          if (cur.left === null) {
            cur.left = newNode;
            return this;
          }
          cur = cur.left;
        } else if (value > cur.value) {
          if (cur.right === null) {
            cur.right = newNode;
            return this;
          }
          cur = cur.right;
        }
      }
    }
  }
  find(val) {
    if (this.root === null) return false;
    let cur = this.root;
    let found = false;
    while (cur && !found) {
      if (val < cur.value) {
        if (cur.left === null) return false;
        cur = cur.left;
      } else if (val > cur.value) {
        if (cur.right === null) return false;
        cur = cur.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return cur;
  }
  breadthFirstSearch() {
    let allValues = [];
    let queue = [this.root];
    let dequeued;
    while (queue.length > 0) {
      dequeued = queue.shift();
      allValues.push(dequeued.value);
      if (dequeued.left) {
        queue.push(dequeued.left);
      }
      if (dequeued.right) {
        queue.push(dequeued.right);
      }
    }
    return allValues;
  }
  DFSPreOrder() {
    let data = [];
    let cur = this.root;
    function preOrderHelper(node) {
      data.push(cur.value);
      if (node.left) preOrderHelper(node.left);
      if (node.right) preOrderHelper(node.right);
    }
    preOrderHelper(cur);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    let cur = this.root;
    function postOrderHelper(node) {
      if (node.left) postOrderHelper(node.left);
      if (node.right) postOrderHelper(node.right);
      data.push(node.value);
    }
    postOrderHelper(cur);
    return data;
  }
  DFSInOrder() {
    let data = [];
    let cur = this.root;
    function inOrderHelper(node) {
      if (node.left) inOrderHelper(node.left);
      data.push(node.value);
      if (node.right) inOrderHelper(node.right);
    }
    inOrderHelper(cur);
    return data;
  }
}
