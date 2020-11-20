Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
Note that you're expected to solve this problem without using division.

// Solution 1 O(n) space | O(n) time

function arrayOfProducts(array) {
	let result = [];
	let product;
  for (let i = 0; i < array.length; i++) {
		product = 1;
		let left = i - 1;
		let right = i + 1;
		while (left >= 0) product *= array[left--];
		while (right < array.length) product *= array[right++];
		result.push(product);
	}
	return result;
}
