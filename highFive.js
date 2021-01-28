// 1086. High Five

// Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.

// Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

// A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.

// Input: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
// Output: [[1,87],[2,88]]
// Explanation:
// The student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.
// The student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, but with integer division their average converts to 88.

// Solution 1

var highFive = function(items) {
  let map = new Map();
  for (let item of items) {
      if (!map.has(item[0])) map.set(item[0], []);
      map.get(item[0]).push(item[1]);
  }
  let ans = [];
  for (let [key, value] of map) {
      map.set(key, value.sort((a, b) => b - a));
  }
  for (let [key, value] of map) {
      let sum = 0;
      for (let i = 0; i < 5; i++) {
          sum += value[i];
      }
      ans.push([key, Math.floor(sum / 5)]);
  }
  return ans.sort((a, b) => a[0] - b[0]);
};
