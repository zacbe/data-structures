const { Node, BinaryTree } = require("./index");
/**
 * Given two integer arrays inorder and postorder where inorder
 * is the inorder traversal of a binary tree and postorder is
 * the postorder traversal of the same tree, construct and
 * return the binary tree.
 */

/**
 *
 * @param {Number[]} inorder
 * @param {Number[]} postorder
 * @returns {BinaryTree}
 */
function buildTree(inorder, postorder) {}

/**
 *      3
 *     / \
 *    9  20
 *      /  \
 *     15   7
 */

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

const res = buildTree(inorder, postorder);
