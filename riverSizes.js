// AlgoExpert: River Sizes
// Difficulty: medium

// Solution 1 O(nm) time | O(nm) space

function riverSizes(matrix) {
	let islands = [];
	let visited = new Array(matrix.length).fill(false).map(() => new Array(matrix[0].length).fill(false));
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (visited[i][j]) continue;
			if (matrix[i][j] === 1) {
				let island = check(i, j, matrix, visited);
				islands.push(island);
			}
		}
	}
	return islands;
}

function check(i, j, matrix, visited) {
	let stack = [[i, j]];
	let islands = 0;
	while (stack.length > 0) {
		let [row, col] = stack.pop();
		if (visited[row][col]) continue;
		visited[row][col] = true;
		if (matrix[row][col] === 0) continue;
		islands++;
		let neighbors = getNeighbors(row, col, matrix, visited);
		for (let neighbor of neighbors) {
			stack.push(neighbor);
		}
	}
	return islands;
}
function getNeighbors(i, j, matrix, visited) {
	let neighbors = [];
	if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j]);
	if (i < matrix.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j]);
	if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1]);
	if (j < matrix[0].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1]);
	return neighbors;
}
