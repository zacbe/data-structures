/**
 *
 * @param {String[][]} grid
 * @returns {Number}
 */
const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited) === true) count += 1;
    }
  }

  return count;
};

const explore = (grid, row, col, visited) => {
  // check bounds
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  // check water
  if (grid[row][col] === "W") return false;

  // check visited
  const pos = row + "," + col;
  if (visited.has(pos)) return false;
  visited.add(pos);

  // explore all directions
  explore(grid, row - 1, col, visited); // up
  explore(grid, row + 1, col, visited); // down
  explore(grid, row, col - 1, visited); // left
  explore(grid, row, col + 1, visited); // right

  return true;
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

const res = islandCount(grid);
console.log(res);
