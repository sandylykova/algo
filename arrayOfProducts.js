Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
Note that you're expected to solve this problem without using division.

// Solution 1 O(n^2) space | O(n) time

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

// Solution 2 O(n) time | O(n) space

function arrayOfProducts(array) {
	let products = new Array(array.length).fill(1);
	let leftProducts = new Array(array.length).fill(1);
	let rightProducts = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
	for (let i = 0; i < array.length; i++) {
		leftProducts[i] = leftRunningProduct;
		leftRunningProduct *= array[i];
	}
	let rightRunningProduct = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		rightProducts[i] = rightRunningProduct;
		rightRunningProduct *= array[i];
	}
	for (let i = 0; i < array.length; i++) {
		products[i] = leftProducts[i] * rightProducts[i];
	}
	return products;
}

// Solution 3 O(n) time | O(n) space

function arrayOfProducts(array) {
	let products = new Array(array.length).fill(1);
	let leftRunningSum = 1;
	for (let i = 0; i < array.length; i++) {
		products[i] *= leftRunningSum;
		leftRunningSum *= array[i];
	}
	let rightRunningSum = 1;
	for (let i = array.length - 1; i >= 0; i--) {
		products[i] *= rightRunningSum;
		rightRunningSum *= array[i];
	}
	return products;
}
