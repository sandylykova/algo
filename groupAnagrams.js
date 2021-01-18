// Write a function that takes in an array of strings and groups anagrams together. Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, 'cinema' and 'iceman' are anagrams.

// Your function should return a list of anagram groups in no particular order.

// Solution 1

function groupAnagrams(words) {
	let result = [];
	if (words.length === 0) return result;
	let copyWords = words.slice();
  let sortedArr = [];
	for (let i = 0; i < copyWords.length; i++) {
    let word = words[i];
		word = word.split('').sort().join('');
		sortedArr.push(word);
	}
  let used = new Array(words.length).fill(false);
  for (let i = 0; i < words.length; i++) {
    if (!used[i]) {
      used[i] = true;
      result.push([words[i]]);
    }
    for (let j = i + 1; j < words.length; j++) {
      if (!used[j] && sortedArr[i] === sortedArr[j]) {
        used[j] = true;
        result[i].push(words[j]);
      }
    }
  }
	return result;
}

// Solution 2 O(w*n*log(n)) time | O(wn) space - where w is the number of words and n is the length of the longest word

function groupAnagrams(words) {
	let anagrams = {};
	for (let word of words) {
		let sortedWord = word.split('').sort().join('');
		if (sortedWord in anagrams) {
			anagrams[sortedWord].push(word);
		} else {
			anagrams[sortedWord] = [word];
		}
	}
	return Object.values(anagrams);
}

// Solution 3

var groupAnagrams = function(strs) {
	let hash = {};
	for (let str of strs) {
			let sorted = str.split('').sort().join('');
			if (!(sorted in hash)) {
					hash[sorted] = [];
			}
			hash[sorted].push(str);
	}
	let ans = [];
	for (let key in hash) {
			ans.push(hash[key]);
	}
	return ans;
};
