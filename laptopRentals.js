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
	let maxLaptops = 0;
	let laptops = 0;
	let j = 0, i = 0;
	while (i < start.length) {
		if (start[i] < end[j]) {
			laptops++;
			i++;
		} else {
			laptops--;
			j++;
		}
		maxLaptops = Math.max(maxLaptops, laptops);
	}
  return maxLaptops;
}
