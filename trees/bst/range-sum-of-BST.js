const { Node, BST } = require("./index");

/**
 * @param {Node} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function iteravite_rangeSumBST(root, low, high) {
  if (!root) return 0;

  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.data >= low && curr.data <= high) {
      sum += curr.data;
    }

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return sum;
}

/**
 * @param {Node} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function rangeSumBST(root, low, high, sum = 0) {
  if (!root) return 0;

  // if (root.data >= low && root.data <= high) {
  //   sum += root.data;
  // }

  // if (root.left) {
  const left = rangeSumBST(root.left, low, high, sum);
  console.log(left);
  // }
  // if (root.right) {
  const right = rangeSumBST(root.right, low, high, sum);
  console.log(right);
  // }

  // return sum;
}

/**
 *      10
 *     /  \
 *    5   15
 *   / \    \
 *  3   7   18
 *
 */

const array = [10, 5, 15, 3, 7, null, 18];
const low = 7;
const high = 15;

const tree = new BST();
tree.fromArray(array);

const res = rangeSumBST(tree.root, low, high);
console.log(res);
// 10 + 7 + 15;
