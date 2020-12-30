// 1366. Rank Teams by Votes

// In a special ranking system, each voter gives a rank from highest to lowest to all teams participated in the competition.

// The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

// Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.

// Return a string of all teams sorted by the ranking system.

// Example 1:

// Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
// Output: "ACB"
// Explanation: Team A was ranked first place by 5 voters. No other team was voted as first place so team A is the first team.
// Team B was ranked second by 2 voters and was ranked third by 3 voters.
// Team C was ranked second by 3 voters and was ranked third by 2 voters.
// As most of the voters ranked C second, team C is the second team and team B is the third.

// Example 2:

// Input: votes = ["WXYZ","XYZW"]
// Output: "XWYZ"
// Explanation: X is the winner due to tie-breaking rule. X has same votes as W for the first position but X has one vote as second position while W doesn't have any votes as second position.

var rankTeams = function(votes) {
  let obj = {};
  let len = votes[0].length;
  votes.forEach(vote => {
      for (let i = 0; i < len; i++) {
          if (obj[vote[i]] === undefined) {
             obj[vote[i]] = new Array(len).fill(0);
          }
          obj[vote[i]][i]++;
      }
  });
  let res = Object.keys(obj).sort((a, b) => {
      for (let i = 0; i < len; i++) {
          if (obj[a][i] !== obj[b][i]) {
              return obj[b][i] - obj[a][i]
          }
      }
      return a > b ? 1 : -1;
  });
  return res.join('');
}
