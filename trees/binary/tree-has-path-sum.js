const { Node, BinaryTree } = require("./index");

/**
 *
 * Given the root of a binary tree and an integer targetSum,
 * return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 *
 * Note: A leaf is a node with no children.
 */

/**
 *
 * @param {Node} root
 * @param {Number} targetSum
 * @returns {Boolean}
 */
function iterative_hasPathSum(root, targetSum) {
  if (!root) return false;

  const first = [root, targetSum - root.data];
  const stack = [first];

  while (stack.length > 0) {
    const [node, sum] = stack.pop();
    if (!node.right && !node.left && sum === 0) return true;

    if (node.right) stack.push([node.right, sum - node.right.data]);
    if (node.left) stack.push([node.left, sum - node.left.data]);
  }

  return false;
}

/**
 *
 * @param {Node} root
 * @param {Number} targetSum
 * @returns {Boolean}
 */
function recursive_hasPathSum(root, targetSum) {
  if (!root) return false;
  targetSum -= root.data;

  if (!root.right && !root.left && targetSum === 0) return true;

  return (
    recursive_hasPathSum(root.left, targetSum) ||
    recursive_hasPathSum(root.right, targetSum)
  );
}

/**
 * Time O(n) //worst case we visit every node
 * Space O(n) // worst case we store every node in the stack
 *
 * While visiting each node calculate the diference between curr node value
 * and the targetSum, if the difference is 0 and we are in a leaf node
 * we can say we found a root to leaf route that adds up to targetSum
 */

/**
 *              5
 *            /   \
 *           4     8
 *          /     /  \
 *        11     13   4
 *       /  \          \
 *      7    2          1
 */

const array = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const tree = new BinaryTree();
tree.fromArray(array);

const targetSum = 22;
const iterative = iterative_hasPathSum(tree.root, targetSum);
console.log({ iterative });

const recursive = recursive_hasPathSum(tree.root, targetSum);
console.log({ recursive });
