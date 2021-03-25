// 690. Employee Importance

// You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

// For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

// Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all their subordinates.

// Example 1:

// Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// Output: 11
// Explanation:
// Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.

// Solution 1 O(n) time | O(n) space

var GetImportance = function(employees, id) {
  let importanceMap = new Map();
  for (let empl of employees) {
      importanceMap.set(empl.id, [empl.importance, empl.subordinates]);
  }
  let total = 0;
  function traverse(id) {
      let employee = importanceMap.get(id);
      total += employee[0];
      for (let i = 0; i < employee[1].length; i++) {
          let current = employee[1][i];
          if (importanceMap.get(current)[1].length > 0) traverse(current);
          else total += importanceMap.get(current)[0];
      }
  }
  traverse(id);
  return total;
};

// Solution 2 (cleaner code) O(n) time | O(n) space

var GetImportance = function(employees, id) {
  let importanceMap = new Map();
  for (let empl of employees) {
      importanceMap.set(empl.id, empl);
  }
  function traverse(id) {
      let sum = importanceMap.get(id).importance;
      let subs = importanceMap.get(id).subordinates;
      for (let i = 0; i < subs.length; i++) {
          sum += traverse(subs[i]);
      }
      return sum;
  }
  return traverse(id);
};
