const { Node, BinaryTree } = require("./index");

/**
 * Given the root of a binary tree, determine if it is a complete binary tree.
 *
 * In a complete binary tree, every level, except possibly the last, is
 * completely filled, and all nodes in the last level are as far left as
 * possible. It can have between 1 and 2h nodes inclusive at the last level h.
 */

/**
 * Do level order traversal
 *
 * If we find a null node and we are not in the last node (left -> right)
 * the tree is not complete.
 */

/**
 * @param {Node} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  const q = [root];
  let end = false;

  while (q.length > 0) {
    const node = q.shift();

    if (!node) {
      end = true;
    } else {
      if (end) return false; // not the end
      q.push(node.left);
      q.push(node.right);
    }
  }

  return true;
};

/**
 *  Incomplete
 *
 *        5
 *      /   \
 *     11    3
 *    /  \    \
 *   4   15   12
 *
 */

const array = [5, 11, 3, 4, 15, null, 12]; // incomplete

/**
 *      Complete
 *
 *          5
 *        /   \
 *      11     3
 *     /  \   /
 *    4   15 12
 *
 */
// const array = [5, 11, 3, 4, 15, 12, null]; // complete
const tree = new BinaryTree();
tree.fromArray(array);

const res = isCompleteTree(tree.root);
console.log(res);
