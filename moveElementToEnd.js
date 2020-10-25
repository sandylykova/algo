// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

// Solution 1 O(nlog(n)) time | O(1) space

function moveElementToEnd(array, toMove) {
  array.sort((a, b) => a - b);
	let p1 = 0;
	let p2 = array.length - 1;
	while (p1 < p2) {
		if (array[p1] !== toMove) p1++;
		else if (array[p1] === toMove && array[p2] !== toMove) {
			let temp = array[p1];
			array[p1] = array[p2];
			array[p2] = temp;
			p1++;
			p2--;
		} else {
			break;
		}
	}
	return array;
}

// Solution 2 O(n) time | O(1) space


