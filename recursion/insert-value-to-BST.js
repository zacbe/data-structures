const { Node, BST } = require("../trees/bst/index");

/**
 *
 * @param {Node} root
 * @param {Number} input
 * @returns {Node}
 */
function insertIntoBST(root, input) {
  if (!root) return new Node(input);

  if (input <= root.data) {
    root.left = insertIntoBST(root.left, input);
  } else {
    root.right = insertIntoBST(root.right, input);
  }
  return root;
}

/**
 *      4
 *     / \
 *    2   7
 *   / \
 *  1   4
 */

const array = [4, 2, 7, 1, 3];
const input = 5;

const tree = new BST();
tree.fromArray(array, input);

const res = insertIntoBST(tree.root, input);
console.log(res);
