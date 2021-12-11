/**
 *
 * @param {String[][]} grid
 * @returns {Number}
 */
const minIslandCount = (grid) => {
  const visited = new Set();
  let minCount = Number.MAX_VALUE;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const size = explore(grid, r, c, visited);
      if (size > 0 && size < minCount) minCount = size;
    }
  }

  return minCount;
};

const explore = (grid, row, col, visited) => {
  // check bounds
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  // check water
  if (grid[row][col] === "W") return 0;

  // check visited
  const pos = row + "," + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  // explore all directions
  size += explore(grid, row - 1, col, visited); // up
  size += explore(grid, row + 1, col, visited); // down
  size += explore(grid, row, col - 1, visited); // left
  size += explore(grid, row, col + 1, visited); // right

  return size;
};

// time O(row * col)
// space O(row * col)

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const res = minIslandCount(grid);
console.log(res);
