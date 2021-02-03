// AlgoExpert: Valid Starting City
// Difficulty: hard

// Solution 1 O(n^2) time | O(1) space

function validStartingCity(distances, fuel, mpg) {
	let remaining = 0;
	let found = false;
	let validCity;
	for (let i = 0; i < distances.length; i++) {
		remaining = 0;
		remaining += fuel[i] * mpg - distances[i];
		let j = i + 1;
		if (!found) {
			while (remaining >= 0 && i !== j) {
				if (j > distances.length - 1) {
					j = 0;
					if (j === i) break;
				}
				remaining = remaining - distances[j] + fuel[j] * mpg;
				j++;
			}
			if (j === i && remaining >= 0) {
				found = true;
				validCity = i;
			}
		}
	}
  return validCity;
}
