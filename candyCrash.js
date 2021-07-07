// This question is about implementing a basic elimination algorithm for Candy Crush.

// Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

// If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
// After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
// After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
// If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
// You need to perform the above rules until the board becomes stable, then return the current board.

// Solution 1 O((n*m)^2) time | O(1) space

const candyCrush = function(board) {
  let done = true;

  // checking the rows and tagging them
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length - 2; c++) {
          let num1 = Math.abs(board[r][c]);
          let num2 = Math.abs(board[r][c + 1]);
          let num3 = Math.abs(board[r][c + 2]);
          if (num1 === num2 && num2 === num3 && num1 !== 0) {
              done = false;
              board[r][c] = -num1;
              board[r][c + 1] = -num1;
              board[r][c + 2] = -num1;
          }
      }
  }

  // checking the columns and tagging them
  for (let r = 0; r < board.length - 2; r++) {
      for (let c = 0; c < board.length; c++) {
          let num1 = Math.abs(board[r][c]);
          let num2 = Math.abs(board[r + 1][c]);
          let num3 = Math.abs(board[r + 2][c]);
          if (num1 === num2 && num2 === num3 && num1 !== 0) {
              done = false;
              board[r][c] = -num1;
              board[r + 1][c] = -num1;
              board[r + 2][c] = -num1;
          }
      }
  }

  // gravity step

  if (!done) {
    for (let c = 0; c < board[0].length; c++) {
      let index = board.length - 1;

      // move all positive numbers down
      for (let r = board.length - 1; r >= 0; r--) {
          if (board[r][c] > 0) {
              board[index][c] = board[r][c];
              index--;
          }
      }

      // fill the rest with zeroes
      for (let r = index; r >= 0; r--) {
          board[r][c] = 0;
      }
    }
  }

  return done ? board : candyCrush(board);
};

// Solution 1 O((n*m)^2) time | O(n*m) space

var candyCrush = function(board) {
    if (!board || !board.length) return board;
    let copy = [];
    let revisit = false;
    for (let i = 0; i < board.length; i++) {
        let row = [];
        for (let j = 0; j < board[i].length; j++) {
            row.push(false);
        }
        copy.push(row);
    }

    // check cols
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j <= board[i].length - 3; j++) {
            if (board[i][j] !== 0) {
                let first = board[i][j];
                let second = board[i][j + 1];
                let third = board[i][j + 2];
                if (first === second && second === third) {
                    copy[i][j] = true;
                    copy[i][j + 1] = true;
                    copy[i][j + 2] = true;
                    revisit = true;
                }
            }
        }
    }

    // check rows
    for (let i = 0; i <= board.length - 3; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== 0) {
                let first = board[i][j];
                let second = board[i + 1][j];
                let third = board[i + 2][j];
                if (first === second && second === third) {
                    copy[i][j] = true;
                    copy[i + 1][j] = true;
                    copy[i + 2][j] = true;
                    revisit = true;
                }
            }
        }
    }

    // change for zeroes
    for (let i = 0; i < board.length ; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (copy[i][j] === true) {
                board[i][j] = 0;
            }
        }
    }

    // crash zeroes
    for (let i = board[0].length - 1; i >= 0; i--) {
        let zeroIdx = board.length - 1;
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][i] !== 0) {
                [board[zeroIdx][i], board[j][i]] = [board[j][i], board[zeroIdx][i]];
                zeroIdx--;
            }
        }
    }
    return revisit === false ? board : candyCrush(board);
};
