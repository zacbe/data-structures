const { Node, BST } = require("./index");

/**
 * Implement the BSTIterator class that represents an iterator over the in-order
 * traversal of a binary search tree (BST):
 *
 * - BSTIterator(TreeNode root) Initializes an object of the BSTIterator class.
 *   The root of the BST is given as part of the constructor. The pointer should
 *   be initialized to a non-existent number smaller than any element in the BST.
 *
 * - boolean hasNext() Returns true if there exists a number in the traversal to
 *   the right of the pointer, otherwise returns false.
 *
 * - int next() Moves the pointer to the right, then returns the number at the
 *   pointer.
 */

/**
 * @param {Node} root
 */
function BSTIterator(root) {
  this.curr = null;
  this.inOrder = this.inOrder_dfs(root);
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.curr > this.inOrder.length) return -1;

  if (this.curr === null) {
    this.curr = 0;
  } else {
    this.curr += 1;
  }

  return this.inOrder[this.curr];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.curr === null && this.inorder.length > 0) return true;
  const nextIdx = this.curr + 1;
  return this.inOrder[nextIdx] ? true : false;
};

/**
 *
 * @param {Node} root
 * @returns {Node[]}
 */
BSTIterator.prototype.inOrder_dfs = function (root) {
  // check if the stack is not empty
  if (!root) return [];

  const stack = [];
  let curr = root;

  const results = [];
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    results.push(curr.data);
    curr = curr.right;
  }

  return results;
};

/**
 *      7
 *     / \
 *    3   15
 *       /  \
 *      9    20
 */

const array = [7, 3, 15, null, null, 9, 20];
const tree = new BST();
tree.fromArray(array);

const iterator = new BSTIterator(tree.root);
console.log(iterator.next()); // return 3
console.log(iterator.next()); // return 7
console.log(iterator.hasNext()); // return True
console.log(iterator.next()); // return 9
console.log(iterator.hasNext()); // return True
console.log(iterator.next()); // return 15
console.log(iterator.hasNext()); // return True
console.log(iterator.next()); // return 20
console.log(iterator.hasNext()); // return False
