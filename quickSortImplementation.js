// Quick sort implementation

// Best/average case = O(nlogn) time
// Worst = O(n^2) time if data was already sorted
// O(logn) space complexity

function swap(arr, j, i) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// Solution 2

function quickSortHelper(array, startIdx, endIdx) {
	if (startIdx >= endIdx) return;
	let pivot = startIdx;
	let left = startIdx + 1;
	let right = endIdx;
	while (left <= right) {
		if (array[left] > array[pivot] && array[right] < array[pivot]) {
			swap(left, right, array);
		}
		if (array[left] <= array[pivot]) left++;
		if (array[right] >= array[pivot]) right--;
	}
	swap(pivot, right, array);
	let leftSubarrayIsSmaller = right - 1 - startIdx < endIdx - (right + 1);
	if (leftSubarrayIsSmaller) {
		quickSortHelper(array, startIdx, right - 1);
		quickSortHelper(array, right + 1, endIdx);
	} else {
		quickSortHelper(array, right + 1, endIdx);
		quickSortHelper(array, startIdx, right - 1);
	}
}
function swap(i, j, array) {
	[array[i], array[j]] = [array[j], array[i]];
}
