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

// Solution 2 O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array

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

// Solution 3 O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array

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

// Solution 4 O(n * m) time | O(n) space, where n is the size of input array and m is the maximum length of string in input array

function groupAnagrams(words) {
	let hash = {};
	for (let word of words) {
		let count = getCount(word);
		if (!(count in hash)) hash[count] = [];
		hash[count].push(word);
	}
	return Object.values(hash);
}

function getCount(word) {
	let count = new Array(52).fill(0);
	let a = 'a';
	for (let i = 0; i < word.length; i++) {
		let indexOfChar = (word.charCodeAt(i) - a.charCodeAt(0)) * 2;
		let indexOfDel = indexOfChar + 1;
		count[indexOfChar]++;
		count[indexOfDel] = '*';
	}
	return count.join('');
}
