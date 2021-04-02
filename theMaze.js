// 490. The Maze

// There is a ball in a maze with empty spaces (represented as 0) and walls (represented as 1). The ball can go through the empty spaces by rolling up, down, left or right, but it won't stop rolling until hitting a wall. When the ball stops, it could choose the next direction.

// Given the m x n maze, the ball's start position and the destination, where start = [startrow, startcol] and destination = [destinationrow, destinationcol], return true if the ball can stop at the destination, otherwise return false.

// You may assume that the borders of the maze are all walls (see examples).

// Input: maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]
// Output: true
// Explanation: One possible way is : left -> down -> left -> down -> right -> down -> right.

// Solution 1

var hasPath = function(maze, start, destination) {
  let visited = new Set();
  let found = false;
  let stack = [start];
  visited.add(`${start[0]}-${start[1]}`);
  while (stack.length > 0) {
      let [row, col] = stack.pop();
      if (row === destination[0] && col === destination[1]) {
          found = true;
          break;
      }
      let up = getUp(row, col, maze, visited);
      let down = getDown(row, col, maze, visited);
      let left = getLeft(row, col, maze, visited);
      let right = getRight(row, col, maze, visited);
      if (up !== null) stack.push(up);
      if (down !== null) stack.push(down);
      if (left !== null) stack.push(left);
      if (right !== null) stack.push(right);

  }
  return found;
};

function getDown(i, j, maze, visited) {
  if (i === maze.length - 1) return null;
  while (i <= maze.length - 1 && maze[i][j] === 0) {
      i++;
  }
  i--;
  let key = `${i}-${j}`;
  if (visited.has(key)) return null;
  visited.add(key);
  return [i, j];
}

function getUp(i, j, maze, visited) {
  if (i === 0) return null;
  while (i >= 0 && maze[i][j] === 0) {
      i--;
  }
  i++;
  let key = `${i}-${j}`;
  if (visited.has(key)) return null;
  visited.add(key);
  return [i, j];
}

function getRight(i, j, maze, visited) {
  if (j === maze[0].length - 1) return null;
  while (j <= maze[0].length - 1 && maze[i][j] === 0) {
      j++;
  }
  j--;
  let key = `${i}-${j}`;
  if (visited.has(key)) return null;
  visited.add(key);
  return [i, j];
}

function getLeft(i, j, maze, visited) {
  if (j === 0) return null;
  while (j >= 0 && maze[i][j] === 0) {
      j--;
  }
  j++;
  let key = `${i}-${j}`;
  if (visited.has(key)) return null;
  visited.add(key);
  return [i, j];
}
