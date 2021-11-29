const { Node, BST } = require("./index");

/**
 * You are given the root of a binary search tree (BST) and an integer val.
 *
 * Find the node in the BST that the node's value equals val and return the
 * subtree rooted with that node. If such a node does not exist, return null.
 */

/**
 * Iterative solution
 *
 * Time O(h) where h is the height of the tree
 * Space O(1) constant
 * @param {Node} root
 * @param {number} val
 * @return {Node}
 */
function iterative_searchBST(root, target) {
  while (root && root.data !== target) {
    root = target < root.data ? root.left : root.right;
  }

  return root;
}

/**
 * Recursive solution
 *
 * Time O(h) where h is the height of the tree
 * Space O(h) to keep the call stack
 * @param {Node} root
 * @param {number} target
 * @returns {Node}
 */
function searchBST(root, target) {
  if (!root || target === root.data) return root;

  return target < root.data
    ? searchBST(root.left, target)
    : searchBST(root.right, target);
}

/**
 *        4
 *       / \
 *      2   7
 *     / \
 *    1   3
 */
const target = 1;
const array = [4, 2, 7, 1, 3];
const tree = new BST();
tree.fromArray(array);
// console.log(tree.root);

const res = searchBST(tree.root, target);
console.log(res);
