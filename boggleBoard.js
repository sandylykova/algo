// AlgoExpert: Boggle Board
// Difficulty: hard

// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing letters; this matrix represents a boggle board. You're also given a list of words.

// Write a function that returns an array of all the words contained in the boggle board. The final words don't need to be in any particular order.

// A word is constructed in the boggle board by connecting adjacent
// (horizontally, vertically, or diagonally) letters, without using any single letter at a given position more than once; while a word can of course have repeated letters, those repeated letters must come from different positions in the boggle board in order for the word to be contained in the board. Note that two or more words are allowed to overlap and use the same letters in the boggle board.

// board = [
//   ["t", "h", "i", "s", "i", "s", "a"],
//   ["s", "i", "m", "p", "l", "e", "x"],
//   ["b", "x", "x", "x", "x", "e", "b"],
//   ["x", "o", "g", "g", "l", "x", "o"],
//   ["x", "x", "x", "D", "T", "r", "a"],
//   ["R", "E", "P", "E", "A", "d", "x"],
//   ["x", "x", "x", "x", "x", "x", "x"],
//   ["N", "O", "T", "R", "E", "-", "P"],
//   ["x", "x", "D", "E", "T", "A", "E"],
// ]
// words = [
//   "this", "is", "not", "a", "simple", "boggle",
//   "board", "test", "REPEATED", "NOTRE-PEATED",
// ]

// output = ["this", "is", "a", "simple", "boggle", "board", "NOTRE-PEATED"]

// Solution 1

function boggleBoard(board, words) {
	let result = [];
  for (let word of words) {
		check(word, board);
	}
	function check(word, board) {
		let foundWord = false;
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (board[i][j] === word[0]) {
					traverse(word, board, 0, i, j);
				}
			}
		}
		function traverse(word, board, index, i, j) {
			if (!foundWord) {
				if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return;
				if (word[index] !== board[i][j]) return;
				if (index === word.length - 1) {
					foundWord = true;
					result.push(word);
					return;
				}
				board[i][j] = null;
				traverse(word, board, index + 1, i + 1, j);
				traverse(word, board, index + 1, i - 1, j);
				traverse(word, board, index + 1, i, j + 1);
				traverse(word, board, index + 1, i, j - 1);
				traverse(word, board, index + 1, i - 1, j - 1);
				traverse(word, board, index + 1, i + 1, j + 1);
				traverse(word, board, index + 1, i - 1, j + 1);
				traverse(word, board, index + 1, i + 1, j - 1);
				board[i][j] = word[index];
			}
		}
		return false;
	}
	return result;
}
