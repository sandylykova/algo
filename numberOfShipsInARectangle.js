// 1274. Number of Ships in a Rectangle

// Each ship is located at an integer point on the sea represented by a cartesian plane, and each integer point may contain at most 1 ship.

// You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and returns true If there is at least one ship in the rectangle represented by the two points, including on the boundary.

// Given two points: the top right and bottom left corners of a rectangle, return the number of ships present in that rectangle. It is guaranteed that there are at most 10 ships in that rectangle.

// Submissions making more than 400 calls to hasShips will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

// Input:
// ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]
// Output: 3
// Explanation: From [0,0] to [4,4] we can count 3 ships within the range.

// Solution 1

var countShips = function(sea, topRight, bottomLeft) {
  let countOfShips = 0;
  let stackOfCoords = [[topRight, bottomLeft]];
  while (stackOfCoords.length > 0) {
      let [tR, bL] = stackOfCoords.pop();
      if (!sea.hasShips(tR, bL)) continue;
      let [right, top] = tR;
      let [left, bottom] = bL;
      if (right === left && top === bottom) {
          countOfShips++;
          continue;
      }
      let xCoord = Math.floor((right + left) / 2);
      let yCoord = Math.floor((top + bottom) / 2);
      // top right
      stackOfCoords.push([tR, [xCoord + 1, yCoord + 1]]);
      // top left
      stackOfCoords.push([[xCoord, top], [left, yCoord + 1]]);
      // bottom right
      stackOfCoords.push([[right, yCoord], [xCoord + 1, bottom]]);
      // bottom left
      stackOfCoords.push([[xCoord, yCoord], bL]);
  }
  return countOfShips;
};
