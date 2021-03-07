// AlgoExpert: Generate Div Tags
// Difficulty: hard

// Solution 1 O((2n)!/((n!((n + 1)!)))) time | O((2n)!/((n!((n + 1)!)))) space - where n is the input number

function generateDivTags(numberOfTags) {
	let open = '<div>';
	let close = '</div>';
	let ans = [];
	function traverse(openning, closing, curr) {
		if (openning === 0 && closing === 0) {
			ans.push(curr);
			return;
		}
		if (openning > 0) {
			traverse(openning - 1, closing, curr + open);
		}
		if (openning < closing) {
			traverse(openning, closing - 1, curr + close);
		}
	}
	traverse(numberOfTags, numberOfTags, '');
  return ans;
}
