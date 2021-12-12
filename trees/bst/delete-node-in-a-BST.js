const { Node, BST } = require("./index");

/**
 * Given a root node reference of a BST and a key, delete the node with the
 * given key in the BST. Return the root node reference (possibly updated)
 * of the BST.
 *
 * Basically, the deletion can be divided into two stages:
 * - Search for a node to remove.
 * - If the node is found, delete the node.
 */

/**
 * @param {Node} root
 * @param {number} target
 * @return {Node}
 */
function deleteNode(root, target) {}

/**
 *  Before Deletion     After Deletion
 *        5                  5
 *       / \                / \
 *      3   6              4   6
 *     / \   \            /     \
 *    2   4   7          2       7
 */
const array = [5, 3, 6, 2, 4, null, 7];
const target = 3;

const tree = new BST();
tree.fromArray(array);
// console.log(tree.root);

const res = deleteNode(tree.root, target);
console.log(res);
