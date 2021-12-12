const { Node, BinaryTree } = require("./index");

function inOrder(root) {
  while (root.right) {
    root = root.right;
  }

  console.log(root);
}

/**
 *         1
 *       /   \
 *      2     3
 *     / \   / \
 *    4   5 6   7
 *
 */

const array = [1, 2, 3, 4, 5, 6, 7];
const tree = new BinaryTree();
tree.fromArray(array);

inOrder(tree.root);
