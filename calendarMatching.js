// AlgoExpert: Calendar Matching
// Difficulty: very hard

// Solution 1

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
	let dailyBounds1Mins = [];
	for (let time of dailyBounds1) {
		let mins = convertToMins(time);
		dailyBounds1Mins.push(mins);
	}
	let dailyBounds2Mins = [];
	for (let time of dailyBounds2) {
		let mins = convertToMins(time);
		dailyBounds2Mins.push(mins);
	}
	let commonBounds = [Math.max(dailyBounds1Mins[0], dailyBounds2Mins[0]), Math.min(dailyBounds1Mins[1], dailyBounds2Mins[1])];
	if (calendar1.length === 0 && calendar2.length === 0) {
		let start = convertToString(commonBounds[0]);
		let end = convertToString(commonBounds[1]);
		return [[start, end]];
	}
	let mergedIntervals = calendar1.concat(calendar2);
	for (let i = 0; i < mergedIntervals.length; i++) {
		let interval = mergedIntervals[i];
		let start = convertToMins(interval[0]);
		let end = convertToMins(interval[1]);
		mergedIntervals[i] = [start, end];
	}
	mergedIntervals.sort((a, b) => a[0] - b[0]);
	let commonIntervals = [];
	for (let i = 0; i < mergedIntervals.length; i++) {
		if (commonIntervals.length === 0 || commonIntervals[commonIntervals.length - 1][1] < mergedIntervals[i][0]) {
				commonIntervals.push(mergedIntervals[i]);
		} else {
			commonIntervals[commonIntervals.length - 1][1] = Math.max(commonIntervals[commonIntervals.length - 1][1], mergedIntervals[i][1]);
		}
	}
	let start = commonBounds[0];
	let end = commonBounds[1];
	let freeTimes = [];
	for (let i = 0; i < commonIntervals.length; i++) {
		let interval = commonIntervals[i];
		if (i === 0) {
			if (start < interval[0]) {
				let diff = interval[0] - start;

				if (diff >= meetingDuration) {
					freeTimes.push([start, interval[0]]);
				}
			}
		}
		if (i > 0) {
			let prevInterval = commonIntervals[i - 1];
			let prevEnd = prevInterval[1];
			let currStart = interval[0];
			if (currStart - prevEnd >= meetingDuration && prevEnd >= start && currStart <= end) {
				freeTimes.push([prevEnd, currStart]);
			}
		}
		if (i === commonIntervals.length - 1) {
			if (end > interval[1]) {
				let diff = end - interval[1];
				if (diff >= meetingDuration) {
					freeTimes.push([interval[1], end]);
				}
			}
		}
	}
	let ans = [];
	for (let time of freeTimes) {
		let start = convertToString(time[0]);
		let end = convertToString(time[1]);
		ans.push([start, end]);
	}
	return ans;
}

function convertToString(time) {
	let hours = Math.floor(time / 60);
	let mins = time - hours * 60;
	if (mins === 0) mins = '00';
	return `${hours}:${mins}`;
}
function convertToMins(time) {
	let [hours, mins] = time.split(':');
	return hours * 60 + mins * 1;
}
