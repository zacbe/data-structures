const { Node, TreeBinary } = require("./index");

function recursive_dfs(root, pick) {
  const traversals = {
    "pre-order": recursive_preOrderTrav,
    "in-order": recursive_inOrderTrav,
    "post-order": recursive_postOrderTrav,
  };

  const fn = traversals[pick];
  fn(root);
}

function recursive_preOrderTrav(root) {
  if (!root) return;

  console.log(root.data);
  preOrderTrav(root.left);
  preOrderTrav(root.right);
}

function recursive_inOrderTrav(root) {
  if (!root) return;

  preOrderTrav(root.left);
  console.log(root.data);
  preOrderTrav(root.right);
}

function recursive_postOrderTrav(root) {
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

function iterative_preOrderTrav(root) {}
function iterative_inOrderTrav(root) {
  if (!root) return [];

  const stack = [root];
  const results = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    results.push(curr.data);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return results;
}

function iterative_postOrderTrav(root) {
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
 *       C
 *     /   \
 *    A     D
 */

const array = ["C", "A", "D"];
const tree = new TreeBinary();
tree.fromArray(array);
// console.log(tree.root);

// const it_inOrder = iterative_inOrderTrav(tree.root);
// console.log(JSON.stringify(it_inOrder, null, 2));

const it_postOrder = iterative_postOrderTrav(tree.root);
console.log(JSON.stringify(it_postOrder, null, 2));

// const preOrder = recursive_dfs(tree.root, "pre-order"); // CAD
// console.log(preOrder);
// const inOrder = recursive_dfs(tree.root, "in-order"); // ACD
// console.log(inOrder);
// const postOrder = recursive_dfs(tree.root, "post-order"); // ADC
// console.log(postOrder);
