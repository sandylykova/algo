// The Fibonacci sequence is defined as follows: the first number of the sequence 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number. Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..
// getNthFib1(2) => 1 (0, 1)

// Solution 1 - naive solution | O(2^n) time | O(n) space

function getNthFib1(n) {
  if (n === 1) return 0;
	else if (n === 2) return 1;
	else return getNthFib1(n - 1) + getNthFib1(n - 2);
}

// Solution 2 | O(n) time | O(1) space

function getNthFib2(n) {
	if (n === 1) return 0;
  let num1 = 0;
	let num2 = 1;
	let tempNum;
	while (n - 2 > 0) {
		tempNum = num1;
		num1 = num2;
		num2 = num2 + tempNum;
		n--;
	}
	return num2;
}

// ----- or -----

// Solution 3 | O(n) time | O(n) space

function getNthFib3(n, memo = {1: 0, 2: 1}) {
	if (n in memo) return memo[n];
	else return memo[n] = getNthFib3(n - 1, memo) + getNthFib3(n - 2, memo);
}

// Solution 4 | O(n) time | O(1) space

function getNthFib4(n) {
  let lastTwo = [0, 1];
  let counter = 2;
  while (counter < n) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[1] = nextFib;
    lastTwo[0] = lastTwo[1];
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
