/**
 * Pre-Order Traversal node left right
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

function preOrder() {
  let visited = [],
    current = this.root;

  let traverse = (node) => {
    visited.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };

  traverse(current);
  return visited;
}
