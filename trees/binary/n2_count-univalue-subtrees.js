const { Node, BinaryTree } = require("./index");

/**
 *
 * Given the root of a binary tree, return the number of uni-value subtrees.
 * A uni-value subtree means all nodes of the subtree have the same value.
 *
 *      1          1              1
 *     / \   or   / \     or     / \
 *    1   1      1  null       null 1
 */

/**
 * Counts the number of universal value sub-trees
 *
 * Note: this solution is n^2
 * @param {Node} root
 * @return {number}
 */
function countUniVals(root) {
  if (!root) return 0;

  let count = countUniVals(root.left) + countUniVals(root.right);
  console.log({ count });
  if (is_uni(root)) count++;
  return count;
}

/**
 * Determines if a given tree is universal value or not
 * @param {Node} root
 * @returns {Boolean}
 */
function is_uni(root) {
  console.log({ root });
  if (!root) return true;

  // children and parent do not have the same value
  if (root.left && root.left.data !== root.data) return false;
  if (root.right && root.right.data !== root.data) return false;

  if (is_uni(root.left) && is_uni(root.right)) return true;

  return false;
}

/**
 *
 *        5
 *      /   \
 *     1     5
 *    / \     \
 *   5   5     5
 */

const array = [5, 1, 5, 5, 5, null, 5];
const tree = new BinaryTree();
tree.fromArray(array);

const recursive = countUniVals(tree.root);
console.log({ recursive });
