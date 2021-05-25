// Algoexpert: Zigzag traverse
// Difficulty: hard

// Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m) and returns a one-dimensional array of all the array's elements in zigzag order.

// Zigzag order starts at the top left corner of the two-dimensional array, goes down by one element, and proceeds in a zigzag pattern all the way to the bottom right corner.

// Input: [
//   [1,  3,  4, 10],
//   [2,  5,  9, 11],
//   [6,  8, 12, 15],
//   [7, 13, 14, 16],
// ]

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// Solution O(n) time | O(n) space

function zigzagTraverse(array) {
	let lastRow = array.length - 1;
	let lastCol = array[0].length - 1;
	let col = 0;
	let row = 0;
	let goingDown = true;
	let ans = [];
  while (!isValid(row, lastRow, col, lastCol)) {
		ans.push(array[row][col]);
		if (goingDown) {
			if (col === 0 || row === lastRow) {
				goingDown = false;
				if (row === lastRow) {
					col++;
				} else {
					row++;
				}
			} else {
				row++;
				col--;
			}
		} else {
			if (col === lastCol || row === 0) {
				goingDown = true;
				if (col === lastCol) {
					row++;
				} else {
					col++;
				}
			} else {
				row--;
				col++;
			}
		}
	}
	return ans;
}

function isValid(row, lastRow, col, lastCol) {
	return row < 0 || row > lastRow || col < 0 || col > lastCol;
}

