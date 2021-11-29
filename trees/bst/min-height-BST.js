const { Node } = require("./index");

/**
 *
 * @param {Number[]} array
 * @returns {Node}
 */
function minHeightBst(array) {
  const min = 0;
  const max = array.length - 1;
  return rec(array, min, max);
}

/**
 *
 * @param {Number[]} array
 * @param {Number} min
 * @param {Number} max
 * @returns {Node}
 */
function rec(array, min, max) {
  // leaf node
  if (min > max) return null;

  // 1. find root
  const rootIdx = Math.floor((min + max) / 2);
  const root = new Node(array[rootIdx]);

  // 2. find left
  const left = rec(array, min, rootIdx - 1);

  // 3. find right
  const right = rec(array, rootIdx + 1, max);

  // 4. connect to root
  root.left = left;
  root.right = right;

  return root;
}

const array = [1, 2, 5, 7, 10, 13, 14, 15, 22];
const res = minHeightBst(array);
console.log(res);
