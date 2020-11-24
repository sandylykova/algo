// Write a function that takes in a non-empty sorted array of distinct integers, constructs a BST from the integers, and returns the root of the BST. The function should minimize the height of the BST.

// Solution 1 O(nlog(n)) time | O(n) space -  where n is the length of the array

function minHeightBst(array) {
	function constructMinHeightBST(start, end, bst, array) {
		if (start > end) return;
		let index = Math.floor((end + start) / 2);
		let valueToAdd = array[index];
		if (bst === null) {
			bst = new BST(valueToAdd);
		} else {
			bst.insert(valueToAdd);
		}
		constructMinHeightBST(start, index - 1, bst, array);
		constructMinHeightBST(index + 1, end, bst, array);
		return bst;
}
	return constructMinHeightBST(0, array.length - 1, null, array);
}

// BST class was provided

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Solution 2 O(n) time | O(n) space -  where n is the length of the array

function minHeightBst(array) {
  function constructMinHeightBst(array, start, end) {
		if (start > end) return null;
		let midIdx = Math.floor((start + end) / 2);
		let bst = new BST(array[midIdx]);
		bst.left = constructMinHeightBst(array, start, midIdx - 1);
		bst.right = constructMinHeightBst(array, midIdx + 1, end);
		return bst;
	}
	return constructMinHeightBst(array, 0, array.length - 1);
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
