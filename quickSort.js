// AlgoExpert: Quick Sort
// Difficulty: hard

// Solution 1 O(n^2) time - worst case and O(nlog(n)) time - average case | O(log(n)) space

function quickSort(array) {
	quickSortHelper(array, 0, array.length - 1);
	return array;
}

function quickSortHelper(array, start, end) {
	if (start >= end) return;
	let pivot = start;
	let left = pivot + 1;
	let right = end;
	while (left <= right) {
		if (array[left] > array[pivot] && array[right] < array[pivot]) {
			swap(left, right, array);
		}
		if (array[left] <= array[pivot]) left++;
		if (array[right] >= array[pivot]) right--;
	}
	swap(pivot, right, array);
	quickSortHelper(array, start, right - 1);
	quickSortHelper(array, right + 1, end);
}

function swap(i, j, arr) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}
