// 752. Open the Lock

// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation:
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".

// Solution 1

var openLock = function(deadends, target) {
  let q = ['0000'];
  let deadendsSet = new Set(deadends);
  let visited = new Set();
  if (deadendsSet.has('0000')) return -1;
  let steps = 0;
  while (q.length > 0) {
      let len = q.length;
      for (let i = 0; i < len; i++) {
          let node = q.shift();
          if (node === target) return steps;
          let neighbors = getNeighbors(node, visited, deadendsSet);
          for (let neighbor of neighbors) {
              visited.add(neighbor);
              q.push(neighbor);
          }
      }
      steps++;
  }
  return -1;
};

function getNeighbors(value, set, deadendsSet) {
  let dirs = [[0, 1], [1, 1], [2, 1], [3, 1], [0, -1], [1, -1], [2, -1], [3, -1]];
  let values = [];
  for (let dir of dirs) {
      let val = value.split('');
      let [idx, num] = dir;
      let valueAtIdx;
      if (num < 0) {
          valueAtIdx = Number(val[idx]) + num + 10;
      } else {
          valueAtIdx = Number(val[idx]) + num;
      }
      valueAtIdx = valueAtIdx % 10;
      val[idx] = String(valueAtIdx);
      val = val.join('');
      if (!set.has(val) && !deadendsSet.has(val)) values.push(val);
  }
  return values;
}
