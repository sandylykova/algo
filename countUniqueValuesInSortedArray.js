Implement a function, which called accepts a sorted Array, and counts the unique values in the Array.

const countUniqueValues = arr => {
  let p1 = 0;
  let p2 = 1;
  while (p2 < arr.length) {
    console.log(arr[p1], arr[p2], p1, p2)
    if (arr[p1] !== arr[p2]) {
      p1++;
      arr[p1] = arr[p2];
    }
    p2++;
  }
  return p1 + 1;
}

// countUniqueValues([1,1,1,2,2]) => 2
