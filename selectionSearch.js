// If you're unfamiliar with Selection Sort, we recommend watching the Conceptual Overview section of this question's video explanation before starting to code.

// Best: O(n^2) time | O(1)
// Average: O(n^2) time | O(1)
// Worst: O(n^2) time | O(1)

// Solution 1
function selectionSort1(array) {
  let startIdx = 0;
	while (startIdx < array.length - 1) {
		let smallestIdx = startIdx;
		for (let i = startIdx + 1; i < array.length; i++) {
			if (array[smallestIdx] > array[i]) smallestIdx = i;
		}
		[array[startIdx], array[smallestIdx]] = [array[smallestIdx], array[startIdx]];
		startIdx++;
	}
	return array;
}

// Solution 2

function selectionSort2(array) {
	let noSwaps;
  for (let i = 0; i < array.length; i++) {
    let min = Infinity;
    let minIndex;
		noSwaps = true;
		for ( let j = i; j < array.length; j++) {
			if (min > array[j]) {
        min = array[j]
				minIndex = j;
				noSwaps = false;
			}
		}
    if (array[minIndex] < array[i]) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
		if (noSwaps) break;
	}
	return array;
}
