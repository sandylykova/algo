// 347. Top K Frequent Elements

// Given a non-empty array of integers, return the k most frequent elements.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Solution 1 with quickselect O(n) time in average case, O(n^2) time is worst case | O(n) space

var topKFrequent = function(nums, k) {
  let freqMap = new Map();
  let uniqueVals = [];
  let result = [];
  for (let num of nums) {
      if (!freqMap.has(num)) {
          freqMap.set(num, 0);
          uniqueVals.push(num);
      }
      freqMap.set(num, freqMap.get(num) + 1);
  }
  let n = uniqueVals.length;
  function quickSelect(start, end) {
      while (true) {
          let pI = start;
          let left = start + 1;
          let right = end;
          while (left <= right) {
              if (freqMap.get(uniqueVals[left]) >= freqMap.get(uniqueVals[pI]) && freqMap.get(uniqueVals[right]) < freqMap.get(uniqueVals[pI])) {
                  swap(left, right);
              }
              if (freqMap.get(uniqueVals[left]) < freqMap.get(uniqueVals[pI])) left++;
              if (freqMap.get(uniqueVals[right]) >= freqMap.get(uniqueVals[pI])) right--;
          }
          swap(pI, right);
          if (n - k === right) {
              while (right < n) {
                  result.push(uniqueVals[right++]);
              }
              return result;
          } else if (n - k > right) {
              start = right + 1;
          } else {
              end = right - 1;
          }
      }
  }
  function swap(i, j) {
      [uniqueVals[i], uniqueVals[j]] = [uniqueVals[j], uniqueVals[i]];
  }
  return quickSelect(0, uniqueVals.length - 1);
};

// Solution 2 with bucket sort O(n) time | O(n) space

var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [num, freq] of freqMap) {
        if (bucket[freq] === undefined) {
            bucket[freq] = [];
        }
        bucket[freq].push(num);
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }
    return result;
};
