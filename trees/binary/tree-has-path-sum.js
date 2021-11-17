const { Node, TreeBinary } = require("./index");

/**
 *
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 *
 */

/**
 *
 * @param {Node} root
 * @param {Number} targetSum
 * @returns {Boolean}
 */
function hasPathSum(root, targetSum) {
  return true;
}

const array = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
//             0, 1, 2, 3,   4,   5,  6, 7, 8,  9,    10,   11,  12

const tree = new TreeBinary();
tree.fromArray(array);
console.log(JSON.stringify(tree.root, null, 2));

/**
 *              5
 *            /   \
 *           4     8
 *          /     /  \
 *        11     13   4
 *       /  \          \
 *      7    2          1
 */
