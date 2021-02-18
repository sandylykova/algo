// AlgoExpert: Class Photos
// Difficulty: easy

// Solution 1 O(n(log(n))) time | O(n) space

function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	let frontRow, backRow;
	if (redShirtHeights[0] > blueShirtHeights[0]) {
		frontRow = blueShirtHeights;
		backRow = redShirtHeights;
	} else {
		frontRow = redShirtHeights;
		backRow = blueShirtHeights;
	}
	for (let i = 0; i < frontRow.length; i++) {
		if (frontRow[i] >= backRow[i]) return false;
	}
  return true;
}
