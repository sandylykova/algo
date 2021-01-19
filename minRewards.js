// AlgoExpert, difficulty: hard
// Min rewards

// Imagine that you're a teacher who's just graded the final exam in a class. You have a list of student scores on the final exam in a particular order (not necessarily sorted), and you want to reward your students. You decide to do so fairly by giving them arbitrary rewards following two rules:

// 1) All students must receive at least one reward.

// 2) Any given student must receive strictly more rewards than an adjacent student (a student immediately to the left or to the right) with a lower score and must receive strictly fewer rewards than an adjacent student with a higher score.

// Write a function that takes in a list of scores and returns the minimum number of rewards that you must give out to students to satisfy the two rules.

// You can assume that all students have different scores; in other words, the scores are all unique.

// Solution 1 O(n) time | O(n) space

function minRewards(scores) {
  let valleys = getValleys(scores);
	let ans = new Array(scores.length).fill(1);
	for (let valley of valleys) {
		expandFromValley(valley, scores, ans);
	}
	return ans.reduce((a, b) => a + b);
}

function expandFromValley(valley, scores, rewards) {
	let left = valley - 1;
	while (left >= 0 && scores[left] > scores[left + 1]) {
		rewards[left] = Math.max(rewards[left], rewards[left + 1] + 1);
		left--;
	}
	let right = valley + 1;
	while (right < scores.length && scores[right] > scores[right - 1]) {
		rewards[right] = Math.max(rewards[right], rewards[right - 1] + 1);
		right++;
	}
}
