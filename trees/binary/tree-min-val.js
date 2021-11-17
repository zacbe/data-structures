const { Node, TreeBinary } = require("./index");

/**
 *
 * @param {Node} root
 * @returns {Number}
 */
function iterative_treeMinVal(root) {
  // bfs

  const queue = [root];
  let minVal = Number.MAX_VALUE;

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.data < minVal) minVal = curr.data;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return minVal;
}

/**
 *
 * @param {Node} root
 * @returns {Number}
 */
function recursive_treeMinVal(root) {
  if (!root) return Number.MAX_VALUE;

  const leftMin = recursive_treeMinVal(root.left);
  const rightMin = recursive_treeMinVal(root.right);

  return Math.min(root.data, leftMin, rightMin);
}

/**
 *
 *        5
 *      /   \
 *     11    3
 *    /  \    \
 *   4   15   12
 *
 */

const array = [5, 11, 3, 4, 15, null, 12];
const tree = new TreeBinary();
tree.fromArray(array);

const iterative = iterative_treeMinVal(tree.root);
console.log({ iterative });

const recursive = recursive_treeMinVal(tree.root);
console.log({ recursive });
