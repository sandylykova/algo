// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Solution 1

var letterCombinations = function(digits) {
  let numberToLetter = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  };
  if (digits.length === 0) return [];
  if (digits.length === 1) return numberToLetter[digits].split('');
  let allNeededLetters = [];
  for (let i = 0; i < digits.length; i++) {
      allNeededLetters.push(numberToLetter[digits[i]]);
  }
  let ans = [];
  function getAllCombinations(curr, allNeededLetters) {
      if (curr.length === digits.length) {
          ans.push(curr.join(''));
      }
      for (let i = 0; i < allNeededLetters.length; i++) {
          for (let j = 0; j < allNeededLetters[i].length; j++) {
              curr.push(allNeededLetters[i][j]);
              let newArr = allNeededLetters.slice(i + 1);
              getAllCombinations(curr, newArr);
              curr.pop();
          }
      }
  }
  getAllCombinations([], allNeededLetters);
  return ans;
};

// Solution 2

function phoneNumberMnemonics(phoneNumber) {
	const numberToLetters = {
		'1': '1',
		'2': 'abc',
		'3': 'def',
		'4': 'ghi',
		'5': 'jkl',
		'6': 'mno',
		'7': 'pqrs',
		'8': 'tuv',
		'9': 'wxyz',
		'0': '0'
    };
	let ans = [];
	function backtrack(curr, arr, phoneNumber) {
		if (curr.length === phoneNumber.length) {
			let str = curr.join('');
			ans.push(str);
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < numberToLetters[arr[i]].length; j++) {
				curr.push(numberToLetters[arr[i]][j]);
				let newArr = arr.slice(i + 1);
				backtrack(curr, newArr, phoneNumber);
				curr.pop();
			}
		}
	}
	backtrack([], phoneNumber, phoneNumber);
  return ans;
}
