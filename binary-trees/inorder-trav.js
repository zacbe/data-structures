/**
 * In-Order Traversal left node right
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

function inOrder() {
  let visited = [],
    current = this.root;

  let traverse = (node) => {
    if (node.left) traverse(node.left);
    visited.push(node.val);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return visited;
}
