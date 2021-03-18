// Hackerrank Tool List

function toolchanger(tools, startIndex, target) {
  let idx = startIndex;
  let rightSide = 0, leftSide = 0;
  while (tools[idx] !== target) {
      idx++;
      rightSide++;
      if (idx === tools.length) idx = 0;
  }
  idx = startIndex;
  while (tools[idx] !== target) {
      idx--;
      leftSide++;
      if (idx === -1) idx = tools.length - 1;
  }
  return Math.min(rightSide, leftSide);
}
