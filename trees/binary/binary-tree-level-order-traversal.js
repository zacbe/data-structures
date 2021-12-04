const { Node, TreeBinary } = require("./index");

/**
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const res = [];

  while (queue.length > 0) {
    const level = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node.data);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(level);
  }

  return res;
}

/**
 *         1
 *       /   \
 *      2     3
 *     / \   / \
 *    4   5 6   7
 *
 * [1] -
 * [2,3] -
 * [3,4,5]
 * [4,5,6,7] -
 * [5,6,7]
 * [6,7]
 * [7]
 * []
 */

const array = [1, 2, 3, 4, 5, 6, 7];
const tree = new TreeBinary();
tree.fromArray(array);

console.log(tree.root);

const res = levelOrder(tree.root);
console.log(res);
