// You are given a list of preferences for n friends, where n is always even.

// For each person i, preferences[i] contains a list of friends sorted in the order of preference. In other words, a friend earlier in the list is more preferred than a friend later in the list. Friends in each list are denoted by integers from 0 to n-1.

// All the friends are divided into pairs. The pairings are given in a list pairs, where pairs[i] = [xi, yi] denotes xi is paired with yi and yi is paired with xi.

// However, this pairing may cause some of the friends to be unhappy. A friend x is unhappy if x is paired with y and there exists a friend u who is paired with v but:

// x prefers u over y, and
// u prefers x over v.
// Return the number of unhappy friends.

// Input: n = 4, preferences = [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], pairs = [[0, 1], [2, 3]]
// Output: 2
// Explanation:
// Friend 1 is unhappy because:
// - 1 is paired with 0 but prefers 3 over 0, and
// - 3 prefers 1 over 2.
// Friend 3 is unhappy because:
// - 3 is paired with 2 but prefers 1 over 2, and
// - 1 prefers 3 over 0.
// Friends 0 and 2 are happy.

// Solution 1

var unhappyFriends = function(n, preferences, pairs) {
  let happyMap = new Array(n);
  for (let [i, j] of pairs) {
      happyMap[i] = preferences[i].indexOf(j);
      happyMap[j] = preferences[j].indexOf(i);
  }

  let unhappy = 0;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < happyMap[i]; j++) {
          let partner = preferences[i][j];
          if (preferences[partner].indexOf(i) < happyMap[partner]) {
              unhappy++;
              break;
          }
      }
  }

  return unhappy;
};
