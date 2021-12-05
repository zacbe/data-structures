const { Node, BinaryTree } = require("./index");
/**
 * @param {Node} root
 * @return {number}
 */
function maxDepth(root, lvl = 1) {
  if (!root) return lvl - 1;

  const leftDepth = maxDepth(root.left, lvl + 1);
  const rightDepth = maxDepth(root.right, lvl + 1);

  return Math.max(leftDepth, rightDepth);
}

/**
 *        3
 *      /   \
 *     9    20
 *         /  \
 *        15   7
 */

const array = [3, 9, 20, null, null, 15, 7];
const tree = new BinaryTree();
tree.fromArray(array);

const res = maxDepth(tree.root);
console.log(res);
