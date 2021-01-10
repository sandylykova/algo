// Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

// Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.

// We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

// Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.

// Input:
// pid =  [1, 3, 10, 5]
// ppid = [3, 0, 5, 3]
// kill = 5
// Output: [5,10]

// Solution 1 O
var killProcess = function(pid, ppid, kill) {
  let map = new Map();
  map.set(0, []);
  pid.forEach(val => map.set(val, []));
  ppid.forEach((val, idx) => map.get(val).push(pid[idx]));
  let result = [];
  function traverse(node) {
      if (!map.has(node)) return;
      result.push(node);
      for (let eachChild of map.get(node)) {
          traverse(eachChild);
      }
  }
  traverse(kill);
  return result;
};
