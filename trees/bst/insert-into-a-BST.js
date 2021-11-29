const { Node, BST } = require("./index");

/**
 * You are given the root node of a binary search tree (BST) and a value to
 * insert into the tree. Return the root node of the BST after the insertion.
 * It is guaranteed that the new value does not exist in the original BST.
 *
 * Notice that there may exist multiple valid ways for the insertion, as long
 * as the tree remains a BST after insertion. You can return any of them
 */

/**
 * Iterative Solution
 *
 * Time O(h) where h is the height of the tree  => O(log n)
 * Space O(1)
 *
 * @param {Node} root
 * @param {Number} val
 * @return {Node}
 */
function iterative_insertIntoBST(root, target) {
  // create a new node if the tree is epmty
  if (!root) return new Node(target);

  // pointer to root
  let curr = root;

  while (curr.data !== target) {
    if (target < curr.data) {
      if (!curr.left) curr.left = new Node(target);
      curr = curr.left;
    } else {
      if (!curr.right) curr.right = new Node(target);
      curr = curr.right;
    }
  }

  return root;
}

/**
 * Recursive Solution
 *
 * Time O(h) where h is the height of the tree  => O(log n)
 * Space O(h) to keep the call stack
 *
 * @param {Node} root
 * @param {Number} target
 * @returns {Node}
 */
function insertIntoBST(root, target) {
  if (!root) return new Node(target);

  if (target < root.data) {
    root.left = insertIntoBST(root.left, target);
  } else {
    root.right = insertIntoBST(root.right, target);
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
const target = 5;

const tree = new BST();
tree.fromArray(array);
// console.log(tree.root);

const res = insertIntoBST(tree.root, target);
console.log(res);
