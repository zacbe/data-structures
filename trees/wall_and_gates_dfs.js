/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function (rooms) {
  for (let i = 0; i < rooms.length; i++) {
    for (let j = 0; j < rooms[i].length; j++) {
      if (rooms[i][j] === 0) {
        console.log("ZERO");
        dfs(i, j, 0, rooms);
      }
    }
  }

  console.log(rooms);
};

function dfs(i, j, count, rooms) {
  if (
    i < 0 ||
    i >= rooms.length ||
    j < 0 ||
    j >= rooms[i].length ||
    rooms[i][j] < count
  ) {
    return;
  }

  rooms[i][j] = count;
  dfs(i + 1, j, count + 1, rooms); // bottom
  dfs(i - 1, j, count + 1, rooms); // top
  dfs(i, j + 1, count + 1, rooms); // right
  dfs(i, j - 1, count + 1, rooms); // bottom
}

const rooms = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];

wallsAndGates(rooms);
