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
 * @param {Node} root
 * @return {number}
 */
function countUniVals(root) {
  const { count } = helper(root);
  return count;
}

/**
 * @param {Node} root
 * @return {Object}
 */
function helper(root) {
  if (!root) return { count: 0, isUni: true };

  // evaluate left
  let { count: count_left, isUni: isUnileft } = helper(root.left);

  // evaluate right
  let { count: count_right, isUni: isUniright } = helper(root.right);

  // assume the subtree is uni-value
  let is_unival = true;
  if (!isUnileft || !isUniright) is_unival = false;

  // evaluate
  if (root.left && root.left.data !== root.data) is_unival = false;
  if (root.right && root.right.data !== root.data) is_unival = false;

  if (is_unival) {
    return { count: count_left + count_right + 1, isUni: true };
  } else {
    return { count: count_left + count_right, isUni: false };
  }
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

const res = countUniVals(tree.root);
console.log(res);
