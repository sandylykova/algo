// AlgoExpert: Maximum Sum Submatrix
// Difficulty: hard

// Solution 1 O(n*m) time | O(n*m) space

function maximumSumSubmatrix(matrix, size) {
  // Write your code here.
	let sum = [];
	for (let i = 0; i < matrix.length; i++) {
		let row = [];
		for (let j = 0; j < matrix[i].length; j++) {
			row.push(0);
		}
		sum.push(row);
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (i == 0 && j === 0) sum[i][j] = matrix[i][j];
			else if (i === 0) sum[i][j] = sum[i][j - 1] + matrix[i][j];
			else if (j === 0) sum[i][j] = sum[i - 1][j] + matrix[i][j];
			else {
				sum[i][j] = sum[i - 1][j] + matrix[i][j] + sum[i][j - 1] - sum[i - 1][j - 1];
			}
		}
	}
	let max = -Infinity;
	for (let i = 0; i < matrix.length - size + 1; i++) {
		for (let j = 0; j < matrix[i].length - size + 1; j++) {
			let row = i + size - 1;
			let col = j + size - 1;
			let currentSum = sum[row][col];
			if (i > 0) {
				let up = sum[i - 1][col];
				currentSum -= up;
			}
			if (j > 0) {
				let left = sum[row][j - 1];
				currentSum -= left;
			}
			if (i > 0 && j > 0) currentSum += sum[i - 1][j - 1];
			max = Math.max(max, currentSum);
		}
	}
  return max;
}
