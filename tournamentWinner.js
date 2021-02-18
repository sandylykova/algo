// AlgoExpert: Tournament Winner
// Difficulty: easy

// Solution 1 O(n) time | O(k) space, where n is the number of competitions and k is the number of teams

function tournamentWinner(competitions, results) {
	let map = new Map();
	let max = -Infinity;
	let winner = '';
  for (let i = 0; i < competitions.length; i++) {
		let competition = competitions[i];
		let [home, away] = competition;
		if (!map.has(home)) map.set(home, 0);
		if (!map.has(away)) map.set(away, 0);
		if (results[i] === 1) {
			map.set(home, map.get(home) + 3);
			if (map.get(home) > max) {
				max = map.get(home);
				winner = home;
			}
		} else {
			map.set(away, map.get(away) + 3);
			if (map.get(away) > max) {
				max = map.get(away);
				winner = away;
			}
		}
	}
  return winner;
}
