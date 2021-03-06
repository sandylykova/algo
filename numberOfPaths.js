// Pramp: Number of Paths

// You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an n×n grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the grid. Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number of the possible paths the driverless car can take.

// For convenience, let’s represent every square in the grid as a pair (i,j). The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes the south-to-north axis. The initial state of the car is (0,0), and the destination is (n-1,n-1).

// The car must abide by the following two rules: it cannot cross the diagonal border. In other words, in every step the position (i,j) needs to maintain i >= j. See the illustration above for n = 5. In every step, it may go one square North (up), or one square East (right), but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).

// Explain the correctness of your function, and analyze its time and space complexities.

// input:  n = 4
// output: 5

// Solution 1 O(n^2) time | O(n^2) space

function numOfPathsToDest(n) {
  let dp = new Array(n).fill(-1).map(() => new Array(n).fill(-1));
  dp[0][0] = 1;
  return numOfPathsToSquare(n - 1, n - 1, dp);
}

function numOfPathsToSquare(i, j, dp) {
  if (i < 0 || j < 0) return 0;
  else if (i < j) dp[i][j] = 0;
  else if (dp[i][j] !== -1) return dp[i][j];
  else {
    dp[i][j] = numOfPathsToSquare(i, j - 1, dp) + numOfPathsToSquare(i - 1, j, dp);
  }
  return dp[i][j];
}
