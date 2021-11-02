/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = function (root) {
  // const decimal = parseInt('100', 2)
  // console.log({decimal})

  const result = dfs(root);
  console.log({ result });

  return true;
};

function leftIdx(idx) {
  return 2 * idx + 1;
}

function rightIdx(idx) {
  return 2 * idx + 2;
}

function parentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

const dfs = function (root) {
  return root ? [root.val, ...dfs(root.left), ...dfs(root.right)] : [];
};

// const constructBST = function(){}

const root = [1, null, 2, 3]; //[1, 0, 1, 0, 1, 0, 1];
sumRootToLeaf(root);
// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
