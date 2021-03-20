// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0 and 1s. The matrix represents a two-toned image, where each 0 represents black and each 0 represents white. An island is defined as any number of 1s that are horizontally or vertically adjacent (but not diagonally adjacent) and that don't touch the border of the image. In other words, a group of horizontally or vertically adjacent 1s isn't an island if any of those 1s are in the first row, last row, first column, or last column of the input matrix.

// Note that an island can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

// You can think of islands as patches of black that don't touch the border of the two-toned image.

// Write a function that returns a modified version of the input matrix, where all of the islands are removed. You remove an island by replacing it with 0s. Naturally, you're allowed to mutate the input matrix.

// Solution 1 O(mn) space | O(mn) time - where m is the number of the rows and n is the number of the columns

function removeIslands(matrix) {
  let copy = [];
	for (let i = 0; i < matrix.length; i++) {
		let row = [];
		for (let j = 0; j < matrix[i].length; j++) {
			row.push(matrix[i][j]);
		}
		copy.push(row);
	}
	let startCol = 0;
	let startRow = 0;
	let endCol = matrix[0].length - 1;
	let endRow = matrix.length - 1;
	while (startCol < endCol) {
		if (copy[startRow][startCol] === 1) {
			checkNeighbors(copy, startRow, startCol);
		}
		startCol++;
	}
	startCol = 0;
	while (startRow < endRow) {
		if (copy[startRow][endCol] === 1) {
			checkNeighbors(copy, startRow, endCol);
		}
		startRow++;
	}
	startRow = 0;
	while (endCol > startCol) {
		if (copy[endRow][endCol] === 1) {
			checkNeighbors(copy, endRow, endCol);
		}
		endCol--;
	}
	while (endRow > startRow) {
		if (copy[endRow][startCol] === 1) {
			checkNeighbors(copy, endRow, startCol);
		}
		endRow--;
	}
	for (let i = 1; i < matrix.length - 1; i++) {
		for (let j = 1; j < matrix[i].length - 1; j++) {
			if (copy[i][j] === 1) matrix[i][j] = 0;
		}
	}
  return matrix;
}

function checkNeighbors(matrix, i, j) {
	let stack = [[i, j]];
	while (stack.length > 0) {
		let [row, col] = stack.pop();
		if (matrix[row][col] === 0 || matrix[row][col] === 2) continue;
		matrix[row][col] = 2;
		let neighbors = findNeighbors(matrix, row, col);
		for (let neighbor of neighbors) {
			stack.push(neighbor);
		}
	}
}

function findNeighbors(matrix, i, j) {
	let neighbors = [];
	if (i > 0) neighbors.push([i - 1, j]);
	if (i < matrix.length - 1) neighbors.push([i + 1, j]);
	if (j > 0) neighbors.push([i, j - 1]);
	if (j < matrix[i].length - 1) neighbors.push([i, j + 1]);
	return neighbors;
}

// Solution 2 O(mn) space | O(1) time

function removeIslands(matrix) {
	let firstCol = 0;
	let lastCol = matrix[0].length - 1;
	while (firstCol <= lastCol) {
		if (matrix[0][firstCol] === 1) {
			checkAround(0, firstCol, matrix);
		}
		firstCol++;
	}
	let firstRow = 1;
	let lastRow = matrix.length - 1;
	while (firstRow <= lastRow) {
		if (matrix[firstRow][lastCol] === 1) {
			checkAround(firstRow, lastRow, matrix);
		}
		firstRow++;
	}
	lastCol = matrix[0].length - 2;
	while (lastCol >= 0) {
		if (matrix[lastRow][lastCol] === 1) {
			checkAround(lastRow, lastCol, matrix);
		}
		lastCol--;
	}
	firstCol = 0;
	lastRow = matrix.length - 2;
	while (lastRow >= 1) {
		if (matrix[lastRow][0] === 1) {
			checkAround(lastRow, 0, matrix);
		}
		lastRow--;
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 1) matrix[i][j] = 0;
			if (matrix[i][j] === 2) matrix[i][j] = 1;
		}
	}
  return matrix;
}

function checkAround(row, col, matrix) {
	let stack = [[row, col]];
	while (stack.length > 0) {
		let [i, j] = stack.pop();
		if (matrix[i][j] !== 1) continue;
		matrix[i][j] = 2;
		let neighbors = getNeighbors(i, j, matrix);
		for (let neighbor of neighbors) {
			stack.push(neighbor);
		}
	}
}

function getNeighbors(i, j, matrix) {
	let vals = [];
	if (i > 0) vals.push([i - 1, j]);
	if (j > 0) vals.push([i, j - 1]);
	if (i < matrix.length - 1) vals.push([i + 1, j]);
	if (j < matrix[0].length - 1) vals.push([i, j + 1]);
	return vals;
}
