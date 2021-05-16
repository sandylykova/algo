// Implementation of merge sort
// O(nlogn) time | O (n) space
// O(logn) decompositions and O(n) comparisons per decomposition

function merge(arr1, arr2) {
  let results = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      results.push(arr1[p1]);
      p1++;
    } else {
      results.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < arr1.length) {
    results.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    results.push(arr2[p2]);
    p2++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Solution 2 O(nlog(n)) time | O(n) space

function mergeSort(array) {
  return mergeSortHelper(0, array.length - 1, array);
}
function mergeSortHelper(start, end, nums) {
    if (start === end) {
        return [nums[start]];
    } else if (start > end) {
        return [];
    }
    let mid = Math.floor(start + (end - start) / 2);
    let leftSide = mergeSortHelper(start, mid, nums);
    let rightSide = mergeSortHelper(mid + 1, end, nums);
    let l = 0;
    let r = 0;
    let merged = [];
    while (l < leftSide.length && r < rightSide.length) {
        if (leftSide[l] < rightSide[r]) {
            merged.push(leftSide[l]);
            l++;
        } else {
            merged.push(rightSide[r]);
            r++;
        }
    }
    while (l < leftSide.length) {
        merged.push(leftSide[l]);
        l++;
    }
    while (r < rightSide.length) {
        merged.push(rightSide[r]);
        r++;
    }
    return merged;
}
