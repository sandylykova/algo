// 862. Shortest Subarray with Sum at Least K

// Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

// If there is no non-empty subarray with sum at least K, return -1.

// Input: A = [2,-1,2], K = 3
// Output: 3

// Solution 1 using deque

var shortestSubarray = function(A, K) {
  /*
   1. create a prefix sums array of the input array
   2. create a deque and store indecies
   3. ebanaya zadachka
  */
   let sums = new Array(A.length + 1);
   sums[0] = 0;
   for (let i = 1; i < sums.length; i++) {
       let prev = sums[i - 1];
       sums[i] = prev + A[i - 1];
   }
   let shortest = Infinity;
   let deque = [];
   for (let i = 0; i < sums.length; i++) {
       while (deque.length && sums[deque[deque.length - 1]] >= sums[i]) {
              deque.pop();
       }
       while (deque.length && sums[i] - sums[deque[0]] >= K) {
           shortest = Math.min(shortest, i - deque.shift());
       }
       deque.push(i);
   }

   return shortest === Infinity ? - 1 : shortest;
};
