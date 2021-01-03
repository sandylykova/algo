// 296. Best Meeting Point
const minTotalDistance = function(grid) {
  let coordinats = [];
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              coordinats.push([i, j]);
          }
      }
  }
  let x = 0;
  let y = 0;
  for (let i = 0; i < coordinats.length; i++) {
    x += coordinats[i][0];
    y += coordinats[i][1];
  }
  let meetPointX = Math.floor(x / coordinats.length);
  let meetPointY = Math.floor(y / coordinats.length);
  let steps = 0;
  for (let i = 0; i < coordinats.length; i++) {
    steps += Math.abs(meetPointX - coordinats[i][0]) + Math.abs(meetPointY - coordinats[i][1]);
  }
  return steps;
};
