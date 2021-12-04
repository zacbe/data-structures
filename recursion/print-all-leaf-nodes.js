const { Node, BST } = require("../trees/bst/index");

function printLeafNode(root) {
  if (!root) return root;

  // leaf node
  if (!root.left && !root.right) {
    console.log(root.data);
    return;
  }
  if (root.left) printLeafNode(root.left);
  if (root.right) printLeafNode(root.right);
}

/**
 *       4
 *     /   \
 *    2     7
 *   / \   / \
 *  1   3 5   8
 */

const array = [4, 2, 7, 1, 3, 5, 8];
const input = 5;

const tree = new BST();
tree.fromArray(array, input);
// console.log(tree.root);

printLeafNode(tree.root);
