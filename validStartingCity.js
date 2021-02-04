// AlgoExpert: Valid Starting City
// Difficulty: hard

// Imagine you have a set of cities that are laid out in a circle, connected by a circular road that runs clockwise. Each city has a gas station that provides gallons of fuel, and each city is some distance away from the next city.

// You have a car that can drive some number of miles per gallon of fuel, and your goal is to pick a starting city such that you can fill up your car with that city's fuel, drive to the next city, refill up your car with that city's fuel, drive to the next city, and so on and so forth until you return back to the starting city with 0 or more gallons of fuel left.

// This city is called a valid starting city, and it's guaranteed that there will always be exactly one valid starting city.

// For the actual problem, you'll be given an array of distances such that city i is distacnes[i] away from city i + 1. Since the cities are connected via a circular road, the last city is connected to the first city. In other words, the last distance in the distances array is equal to the distance from the last city to the first city. You'll also be given an array of fuel available at each city, where fuel[i] is equal to the fuel available at city i. The total amount of fuel available (from all cities combined) is exactly enough to travel to all cities. Your fuel tank always starts out empty, and you're given a positive integer value for the number of miles that your car can travel per gallon of fuel (miles per gallon, or MPG). You can assume that you will always be given at least two cities.

// Write a function that returns the index of the valid starting city.

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

// Solution 2 O(n) time | O(1) space

function validStartingCity(distances, fuel, mpg) {
  let validCityIdx = 0;
	let minRemainingFuel = 0;
	let currReaminingFuel = 0;
	for (let i = 1; i < distances.length; i++) {
		let prevFuel = fuel[i - 1];
		let prevDistance = distances[i - 1];
		currReaminingFuel += prevFuel * mpg - prevDistance;
		if (currReaminingFuel < minRemainingFuel) {
			validCityIdx = i;
			minRemainingFuel = currReaminingFuel;
		}
	}
	return validCityIdx;
}
