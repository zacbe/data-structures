const { Node, TreeBinary } = require("./index");

/**
 *
 * @param {Node} root
 * @returns {Number}
 */
function maxPathSum(root) {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.data; // find leaf

  const rightSum = maxPathSum(root.right);
  const leftSum = maxPathSum(root.left);

  return root.data + Math.max(leftSum, rightSum);
}

/**
 *            5
 *          /   \
 *        11     3
 *       /  \     \
 *      4    2     1
 */
const array = [5, 11, 3, 4, 2, null, 1];
const tree = new TreeBinary();
tree.fromArray(array);

const res = maxPathSum(tree.root);
console.log(res);
