// AlgoExpert: Laptop Rentals
// Difficulty: hard

// Soltion 1 O(nlog(n)) time | O(n) space

function laptopRentals(times) {
	let start = [];
	let end = [];
	for (let time of times) {
		start.push(time[0]);
		end.push(time[1]);
	}
	start.sort((a, b) => a - b);
	end.sort((a, b) => a - b);
	let laptops = 0;
	let endIdx = 0, startIdx = 0;
	while (startIdx < start.length) {
		if (start[startIdx] >= end[endIdx]) {
			laptops--;
			endIdx++;
		}
		laptops++;
		startIdx++;
	}
  return laptops;
}
