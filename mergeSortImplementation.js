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
