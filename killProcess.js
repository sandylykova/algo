// Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

// Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.

// We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

// Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.

// Input:
// pid =  [1, 3, 10, 5]
// ppid = [3, 0, 5, 3]
// kill = 5
// Output: [5,10]

var killProcess = function(pid, ppid, kill) {
  const adj = new Map([[0,[]]]);
  pid.forEach((v) => adj.set(v,[]));
  ppid.forEach((v,i) => adj.get(v).push(pid[i]));

  const res = [];
  function dfs(root){
    if(!adj.has(root)) return;
    if(adj.has(root)) res.push(root);
    for(let child of adj.get(root)) {
      dfs(child);
    }
  }
  dfs(kill);
  return res;
};
