// You may recall that an array A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]
// Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target.  If such an index doesn't exist, return -1.

// You can't access the mountain array directly.  You may only access the array using a MountainArray interface:

// MountainArray.get(k) returns the element of the array at index k (0-indexed).
// MountainArray.length() returns the length of the array.
// Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// Input: array = [1,2,3,4,5,3,1], target = 3
// Output: 2
// Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.

// Solution 1

const peakIndexInMountainArray = A => {
  let left = 0, right = A.length() - 1;

  while (left<right) {
      let mid = Math.floor((left + right) / 2);

      if (A.get(mid) > A.get(mid + 1)) right = mid;
      else left = mid + 1;
  }
  return left;
};

const findInMountainArray = (target, mountainArr)=> {
  let peakIndex = peakIndexInMountainArray(mountainArr);
  let left = 0, right = peakIndex;
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (mountainArr.get(mid) >= target) right = mid;
      else left = mid+1;
  }

  if (mountainArr.get(left) === target) return left;

  left = peakIndex; right = mountainArr.length() -1;
  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (mountainArr.get(mid) <= target) right = mid;
      else left = mid + 1;
  }
  if (mountainArr.get(left) == target) return left;
  return -1;
};
