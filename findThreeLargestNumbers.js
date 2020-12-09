// Write a function that takes in an array of at least three integers and, without sorting the input array, returns a sorted array of the three largest integers in the input array. The function should return duplicate integers if necessary; for example, it should return [10, 10, 12] for an input array of [10, 5, 9, 10, 12].

// Solution 1 O(n) time | O(1) space

function findThreeLargestNumbers1(array) {
  let threeLargestArr = [null, null, null];
	for (const val of array) {
		updateLargest(val, threeLargestArr);
	}
	return threeLargestArr;
}

function updateLargest(value, threeLargestArr) {
	if (threeLargestArr[2] === null || threeLargestArr[2] < value) {
		shiftAndUpdate(value, threeLargestArr, 2);
	} else if (threeLargestArr[1] === null || threeLargestArr[1] < value) {
		shiftAndUpdate(value, threeLargestArr, 1);
	} else if (threeLargestArr[0] === null || threeLargestArr[0] < value) {
		shiftAndUpdate(value, threeLargestArr, 0);
	}
}

function shiftAndUpdate(value, threeLargestArr, index) {
	for (let i = 0; i <= index; i++) {
		if (i === index) threeLargestArr[i] = value;
		else threeLargestArr[i] = threeLargestArr[i + 1];
	}
}

// Solution 2 (a bit cheating because of sort() method)

function findThreeLargestNumbers2(array) {
  let helperArr = [array[0], array[1], array[2]];
	for (let i = 3; i < array.length; i++) {
    let min = Math.min(helperArr[0], helperArr[1], helperArr[2]);
    if (array[i] > min) {
      let indexOfMin = helperArr.indexOf(min);
      helperArr[indexOfMin] = array[i];
    }
	}
	return helperArr.sort((a, b) => a - b);
}
