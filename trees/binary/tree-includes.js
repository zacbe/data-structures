const { Node, BinaryTree } = require("./index");

/**
 *
 * @param {Node} root
 * @param {string} target
 * @param {string} method
 * @returns {Boolean}
 */
function treeIncludes(root, target, method) {
  const methods = {
    dfs_it: iterative_dfs,
    dfs_re: recursive_dfs,
    bfs_it: iterative_bfs,
  };

  const fn = methods[method];

  return root ? fn(root, target) : false;
}

/**
 *
 * @param {Node} root
 * @param {string} target
 * @returns {Boolean}
 */
function iterative_dfs(root, target) {
  const stack = [root];

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.data === target) return true;

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return false;
}

/**
 *
 * @param {Node} root
 * @param {string} target
 * @returns {Boolean}
 */
function recursive_dfs(root, target) {
  if (!root) return false;
  if (root.data === target) return true;

  return recursive_dfs(root.right, target) || recursive_dfs(root.left, target);
}

/**
 *
 * @param {Node} root
 * @param {string} target
 * @returns {Boolean}
 */
function iterative_bfs(root, target) {
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.data === target) return true;

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }

  return false;
}

const array = ["a", "b", "c", "d", "e", null, "f"];
const tree = new BinaryTree();
tree.fromArray(array);

// bfs_it
const res_bfs_it = treeIncludes(tree.root, "e", "bfs_it");
console.log(res_bfs_it);

// dfs_it
const res_dfs_it = treeIncludes(tree.root, "e", "dfs_it");
console.log(res_dfs_it);

// dfs_re
const res_dfs_re = treeIncludes(tree.root, "z", "dfs_re");
console.log(res_dfs_re);
