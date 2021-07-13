// 794. Valid Tic-Tac-Toe State

// Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.

// The board is a 3 x 3 array that consists of characters ' ', 'X', and 'O'. The ' ' character represents an empty square.

// Here are the rules of Tic-Tac-Toe:

// Players take turns placing characters into empty squares ' '.
// The first player always places 'X' characters, while the second player always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.

// Solution 1

var validTicTacToe = function(board) {
  if (!board || !board.length === 0) return false;
  let xWin = checkWinner('X', board);
  let oWin = checkWinner('O', board);
  if (xWin && oWin) return false;
  let turns = 0;
  for (let i = 0; i < board.length; i++) {
      let curr = board[i];
      for (let j = 0; j < curr.length; j++) {
          if (curr[j] === 'X') {
              turns++;
          } else if (curr[j] === 'O') {
              turns--;
          }
      }
  }
  // O more than X
  if (turns < 0) return false;
  // X 2 and more more than O
  if (turns > 1) return false;
  // X has won but O still had turn
  if (xWin && turns === 0) return false;
  // O has won but X still had turn
  if (oWin && turns === 1) return false;
  return true;
};

function checkWinner(player, board) {
  // horizontally
  for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
  }

  // vertically
  for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
  }

  // diagonally
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;

  if (board[2][0] === player && board[1][1] === player && board[0][2] === player) return true;

  return false;
}
