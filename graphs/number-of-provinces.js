/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = (isConnected) => {
  const visited = new Array(isConnected.length).fill(0);
  let count = 0;
  for (let row = 0; row < isConnected.length; row++) {
    if (visited[row] === 0) {
      explore(isConnected, row, visited);
      count++;
    }
  }
  return count;
};

const explore = (matrix, row, visited) => {
  for (let col = 0; col < matrix.length; col++) {
    if (matrix[row][col] && !visited[col]) {
      visited[col] = 1;
      explore(matrix, row, visited);
    }
  }
};

// const _isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1],
// ];

// only connections in main diagonal
const _isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const isConnected = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

const res = findCircleNum(isConnected);
console.log(res);
