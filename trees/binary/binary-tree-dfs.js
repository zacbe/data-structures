const { Node, BinaryTree } = require("./index");

function recursive_dfs(root, pick) {
  const traversals = {
    "pre-order": preOrderTrav,
    "in-order": inOrderTrav,
    "post-order": postOrderTrav,
  };

  const fn = traversals[pick];
  fn(root);
}

function preOrderTrav(root) {
  if (!root) return;

  console.log(root.data);
  preOrderTrav(root.left);
  preOrderTrav(root.right);
}

function inOrderTrav(root) {
  if (!root) return;

  preOrderTrav(root.left);
  console.log(root.data);
  preOrderTrav(root.right);
}

function postOrderTrav(root) {
  if (!root) return;

  preOrderTrav(root.left);
  preOrderTrav(root.right);
  console.log(root.data);
}

function iterative_dfs(root, pick) {
  const traversals = {
    "pre-order": iterative_preOrderTrav,
    "in-order": iterative_inOrderTrav,
    "post-order": iterative_postOrderTrav,
  };

  const fn = traversals[pick];
  fn(root);
}

/**
 * node - left - right
 *
 * @param {Node} root
 * @returns
 */
function iterative_preOrderTrav(root) {
  if (!root) return null;

  // push first value to stack
  const stack = [root];
  const results = [];

  while (stack.length > 0) {
    // pop the stack
    const curr = stack.pop();

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
    results.push(curr.data);
  }

  return results;
}

/**
 * left - node - right
 *
 * @param {Node} root
 * @returns
 */
function iterative_inOrderTrav(root) {
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
}

/**
 * left - right - node
 *
 * @param {Node} root
 * @returns
 */
function iterative_postOrderTrav(root) {
  if (!root) return [];

  const stack = [];
  let curr = root;

  const results = [];
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.right;
    }

    curr = stack.pop();
    results.push(curr.data);
    curr = curr.left;
  }

  return results;
}

/**
 *       B
 *     /   \
 *    A     C
 */

// const array = ["B", "A", "C"];
const array = [5, 3, 6, 2, 4, null, null, 1, null, null];
const tree = new BinaryTree();
tree.fromArray(array);
// console.log(tree.root);

const it_postOrder = iterative_postOrderTrav(tree.root);
console.log(JSON.stringify(it_postOrder, null, 2));
