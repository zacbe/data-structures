const { Node, BinaryTree } = require("./index");

/**
 *
 * @param {Node} root
 * @returns
 */
function iterative_bfs(root) {
  if (!root) return null;

  const q = [root];
  const results = [];
  while (q.length > 0) {
    const curr = q.shift();
    results.push(curr.data);

    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }

  return results;
}

/**
 *       C
 *     /   \
 *    A     D
 */

// Note: iterative version allows the correct order of traversal
//       using a recursive solution utilices the call stack which will return
//       values in a LIFO.

const array = ["C", "A", "D"];
const tree = new BinaryTree();
tree.fromArray(array);
// console.log(tree.root);

const res = iterative_bfs(tree.root);
console.log(res);
