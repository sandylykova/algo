// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10) => [11, -1]

// Solution 1 O(n^2) time | O(1) space

function twoNumberSum1(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
		const firstNum = array[i];
		for (let j = i + 1; j < array.length; j++) {
			const secondNum = array[j];
			if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
		}
	}
	return [];
}

// Solution 2 O(n) time | O(n) space

function twoNumberSum2(array, targetSum) {
  const nums = {};
	for (let i = 0; i < array.length; i++) {
		const eachValue = array[i];
		const potentionalMatch = targetSum - eachValue;
		if (potentionalMatch in nums) {
			return [eachValue, potentionalMatch];
		} else {
			nums[eachValue] = true;
		}
	}
	return [];
}

// Solution 3 O(nlog(n)) time | O(1) space

function twoNumberSum3(array, targetSum) {
  array.sort((a, b) => a - b);
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	while (leftPointer < rightPointer) {
		const currentSum = array[leftPointer] + array[rightPointer];
		if (currentSum === targetSum) {
			return [array[leftPointer], array[rightPointer]];
		} else if (currentSum < targetSum) {
			leftPointer++;
		} else if (currentSum > targetSum) {
			rightPointer--;
		}
	}
	return [];
}
