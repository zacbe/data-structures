const { Node, BinaryTree } = require("./index");

/**
 * @param {Node} root
 * @return {Node}
 */
function invertTree(root) {
  if (!root) return root;

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
}

/**
 *              5
 *            /   \
 *           4     8
 *          /     /  \
 *        11     13   4
 *       /  \          \
 *      7    2          1
 */

const array = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const tree = new BinaryTree();
tree.fromArray(array);

const res = invertTree(tree.root);
// console.log(JSON.stringify(res, null, 2));
