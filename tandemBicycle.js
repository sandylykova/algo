// AlgoExpert: Tandem Bicycle
// Difficulty: easy

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => a - b);
	let ans = 0;
	let i, j;
	if (fastest) {
		i = 0;
		j = redShirtSpeeds.length - 1;
		while (i < redShirtSpeeds.length) {
			ans += Math.max(redShirtSpeeds[i], blueShirtSpeeds[j]);
			i++;
			j--;
		}
	} else {
		i = 0;
		j = 0;
		while (i < redShirtSpeeds.length) {
			ans += Math.max(redShirtSpeeds[i], blueShirtSpeeds[j]);
			i++;
			j++;
		}
	}
  return ans;
}
