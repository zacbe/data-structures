const { Node, BinaryTree } = require("./index");

/**
 *
 * @param {Node} root
 * @returns {Number}
 */
function recursive_treeSum(root) {
  // dfs
  if (!root) return 0;
  return (
    root.data + recursive_treeSum(root.right) + recursive_treeSum(root.left)
  );
}

/**
 *
 * @param {Node} root
 * @returns {Number}
 */
function iterative_treeSum(root) {
  // bfs
  if (!root) return 0;

  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.data;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return sum;
}

/**
 *       3
 *      / \
 *    11   4
 *   /  \    \
 *  4    2    1
 */

const array = [3, 11, 4, 4, 2, null, 1];
const tree = new BinaryTree();
tree.fromArray(array);

const recursive = recursive_treeSum(tree.root);
console.log(recursive);

const iterative = iterative_treeSum(tree.root);
console.log(iterative);
