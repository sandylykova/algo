// Design a Leaderboard class, which has 3 functions:

// 1) addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
// 2) top(K): Return the score sum of the top K players.
// 3) reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
// Initially, the leaderboard is empty.

var Leaderboard = function() {
  this.lb = {};
};

Leaderboard.prototype.addScore = function(playerId, score) {
  if (this.lb[playerId]) {
      this.lb[playerId] += score;
  } else {
      this.lb[playerId] = score;
  }
};

Leaderboard.prototype.top = function(K) {
  let scores = Object.values(this.lb).sort((a, b) => b - a);
  let index = 0;
  let sum = 0;
  while (index < K) {
      sum += scores[index];
      index++;
  }
  return sum;
};

Leaderboard.prototype.reset = function(playerId) {
  delete this.lb[playerId];
};
