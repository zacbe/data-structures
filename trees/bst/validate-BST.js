const { Node, BST } = require("./index");

/**
 *
 * Given the root of a binary tree, determine if it is a valid
 * binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * - The left subtree of a node contains only nodes with keys less than
 *   the node's key.
 * - The right subtree of a node contains only nodes with keys greater
 *   than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 */

/**
 *
 * @param {Node} root
 * @returns {Boolean}
 */
function isValidBST(root, low = null, high = null) {
  if (!root) return true;

  // console.log({ lowerLimit: low, node: root.data, higherLimit: high });
  // if current node is not between low and high limits
  if ((high && root.data >= high) || (low && root.data < low)) {
    return false;
  } else {
    return (
      isValidBST(root.left, low, root.data) &&
      isValidBST(root.right, root.data, high)
    );
  }
}

/**
 *      2
 *     / \
 *    1   3
 *
 */

// const array = [2, 1, 3];
// const array = [0];
// const array = [0, -1, null];
// const array = [5, 1, 4, null, null, 3, 6];
const array = [5, 4, 6, null, null, 3, 7];

const tree = new BST();
tree.fromArray(array);
// console.log(tree.root);

const res = isValidBST(tree.root);
console.log(res);
