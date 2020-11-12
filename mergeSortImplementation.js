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
