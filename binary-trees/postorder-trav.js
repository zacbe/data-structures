/**
 * Post-Order Traversal left rigth node
 *
 * Binary Seach Tree (BST)
 *           10
 *         /    \
 *        7      11
 *       / \       \
 *      6   8      20
 *     /     \    /  \
 *    1       9  14   22
 */

function postOrder() {
  let visited = [],
    current = this.root;

  let traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.val);
  };

  traverse(current);
  return visited;
}
