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
    let found = false
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
}
