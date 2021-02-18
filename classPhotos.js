// AlgoExpert: Class Photos
// Difficulty: easy

// Solution 1 O(nlog(n)) time | O(n) space

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

// Solution 1 O(nlog(n)) time | O(1) space

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
	blueShirtHeights.sort((a, b) => a - b);
	let firstRowShirtColor = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
	for (let i = 0; i < redShirtHeights.length; i++) {
		let redShirt = redShirtHeights[i];
		let blueShirt = blueShirtHeights[i];
		if (firstRowShirtColor === 'RED') {
			if (redShirt >= blueShirt) return false;
		} else {
			if (blueShirt >= redShirt) return false;
		}
	}
  return true;
}
