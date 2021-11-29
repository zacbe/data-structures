const { Node, BST } = require("./index");

/**
 * Given the root of a binary search tree and a node p in it, return
 * the in-order successor of that node in the BST. If the given node
 * has no in-order successor in the tree, return null.
 *
 * The successor of a node p is the node with the smallest key greater
 * than p.val.
 */

/**
 * Traverse the whole tree
 *
 * @param {Node} root
 * @param {Node} p
 * @return {Node}
 */
function iterative_inorderSuccessor(root, p) {
  if (!root) return null;
  const stack = [];
  let curr = root;
  let sm = null;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();

    if (curr.data > p.data) {
      if (!sm) {
        sm = curr.data;
      } else if (sm && curr.data < sm.data) {
        sm = curr.data;
      }
    }

    curr = curr.right;
  }

  return sm;
}

/**
 * Leverage BST properties
 *
 * @param {Node} root
 * @param {Node} p
 */
function inorderSuccessor(root, p) {
  let successor = null;
  while (root) {
    if (p.data >= root.data) {
      root = root.right;
    } else {
      successor = root;
      root = root.left;
    }
  }

  return successor;
}

/**
 *      2
 *     / \
 *    1   6
 *
 */

const array = [2, 1, 6];
// const array = [5, 3, 6, 2, 4, null, null, 1, null, null];
const p = new Node(2);

const tree = new BST();
tree.fromArray(array);
// console.log(tree.root);

const res = inorderSuccessor(tree.root, p);
console.log(res);
