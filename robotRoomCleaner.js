// 489. Robot Room Cleaner

// Given a robot cleaner in a room modeled as a grid.

// Each cell in the grid can be empty or blocked.

// The robot cleaner with 4 given APIs can move forward, turn left or turn right. Each turn it made is 90 degrees.

// When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it stays on the current cell.

// Design an algorithm to clean the entire room using only the 4 given APIs shown below.

// interface Robot {
//   // returns true if next cell is open and robot moves into the cell.
//   // returns false if next cell is obstacle and robot stays on the current cell.
//   boolean move();

//   // Robot will stay on the same cell after calling turnLeft/turnRight.
//   // Each turn will be 90 degrees.
//   void turnLeft();
//   void turnRight();

//   // Clean the current cell.
//   void clean();
// }

// Input:
// room = [
//   [1,1,1,1,1,0,1,1],
//   [1,1,1,1,1,0,1,1],
//   [1,0,1,1,1,1,1,1],
//   [0,0,0,1,0,0,0,0],
//   [1,1,1,1,1,1,1,1]
// ],
// row = 1,
// col = 3

// Explanation:
// All grids in the room are marked by either 0 or 1.
// 0 means the cell is blocked, while 1 means the cell is accessible.
// The robot initially starts at the position of row=1, col=3.
// From the top left corner, its position is one row below and three columns right.

// Solution 1

var cleanRoom = function(robot) {
  const row = robot.row;
  const col = robot.col;
  const dmap = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let visited = new Set();

  function goBack() {
      robot.turnRight();
      robot.turnRight();
      robot.move();
      robot.turnRight();
      robot.turnRight();
  }

  // 0 - up, 1 - right, 2 - down, 3 - left;

  function backtrack(row, col, direction) {
      robot.clean();
      let key = `${row}-${col}`;
      visited.add(key);
      robot.clean();
      for (let i = 0; i < 4; i++) {
          let newDirection = (direction + i) % 4;
          let newRow = row + dmap[newDirection][0];
          let newCol = col + dmap[newDirection][1];
          let newKey =`${newRow}-${newCol}`;
          if (!visited.has(newKey) && robot.move()) {
              backtrack(newRow, newCol, newDirection);
              goBack();
          }
          robot.turnRight();
      }
  }
  backtrack(row, col, 0);
};
