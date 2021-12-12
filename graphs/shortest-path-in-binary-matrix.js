/**
 * A clear path in a binary matrix is a path from the top-left cell
 * (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
 *
 * - All the visited cells of the path are 0.
 * - All the adjacent cells of the path are 8-directionally connected (i.e.,
 *   they are different and they share an edge or a corner).
 *
 * The length of a clear path is the number of visited cells of this path.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  const visited = new Set();
  const start = [0, 0];
  const queue = [start];
  let steps = 1;

  while (queue.length > 0) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift();
      if (row === grid.length - 1 && col === grid[0].length - 1) return steps;

      // check visited
      const pos = row + "," + col;
      if (visited.has(pos)) continue;
      visited.add(pos);

      // get direction vectors
      const directions = getDirections(grid, row, col);
      directions.forEach((dir) => queue.push(dir));
      steps++;
    }
  }

  return -1;
};

const getDirections = (grid, row, col) => {
  const directions = {
    tl: [-1, -1],
    up: [-1, 0],
    tr: [-1, 1],
    right: [0, +1],
    br: [+1, +1],
    down: [+1, 0],
    bl: [+1, -1],
    left: [0, -1],
  };

  const vector = [];
  for (const dir in directions) {
    const [x, y] = directions[dir];
    const position = [row + x, col + y];
    if (isInbound(grid, position)) {
      if (isFree(grid, position)) {
        vector.push(position);
      }
    }
  }

  return vector;
};

const isInbound = (grid, position) => {
  const [row, col] = position;
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return !rowInbounds || !colInbounds ? false : true;
};

const isFree = (grid, position) => {
  const [row, col] = position;
  return grid[row][col] == 0;
};

// const grid = [
//   [0, 1],
//   [1, 0],
// ];

// const grid = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];

const grid = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

/**
 * Direction vectors in a Matrix[row][col]
 *
 * [row+1][col] // down
 * [row-1][col] // up
 *
 * [row][col-1] // left
 * [row][col+1] // right
 *
 *  [row-1][col-1] // top-left
 *  [row-1][col+1] // top-right
 *
 * [row+1][col-1] // bottom-left
 * [row+1][col+1] // bottom-right
 *
 *
 */

const res = shortestPathBinaryMatrix(grid);
console.log(res);
