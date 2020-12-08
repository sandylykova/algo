// An array of integers is said to represent the Binary Search Tree (BST) obtained by inserting each integer in the array, from left to right, into the BST.

// Write a function that takes in two arrays of integers and determines whether these arrays represent the same BST. Note that you're not allowed to construct any BSTs in your code.

// arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11]
// arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81]
//        10
//      /     \
//    8        15
//   /        /   \
//  5       12    94
// /       /     /
// 2      11    81

// Solution 1 O(n^2) time | O(n^2) space

function sameBsts(arrayOne, arrayTwo) {
	if (arrayOne[0] !== arrayTwo[0] || arrayOne.length !== arrayTwo.length) return false;
	if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
	let leftOne = getSmaller(arrayOne);
	let leftTwo = getSmaller(arrayTwo);
	let rigthOne = getBiggerOrEqual(arrayOne);
	let rigthTwo = getBiggerOrEqual(arrayTwo);
	return sameBsts(leftOne, leftTwo) && sameBsts(rigthOne, rigthTwo);
}

function getSmaller(arr) {
	let smaller = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[0]) {
			smaller.push(arr[i]);
		}
	}
	return smaller;
}

function getBiggerOrEqual(arr) {
	let bigger = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] >= arr[0]) {
			bigger.push(arr[i]);
		}
	}
	return bigger;
}
