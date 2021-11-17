/**
 * Pre-Order Traversal node left right
 *
 * Graph
 *            A
 *         /  |  \
 *        B   C   D
 *       / \     / \
 *      E   F   G   H
 *         / \   \
 *        I   J   K
 */

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  preOrder() {
    let visited = [];
    const current = this;

    let traverse = (node) => {
      visited.push(node.name);

      node.children.forEach((c) => {
        traverse(c);
      });
    };

    traverse(current);
    return visited;
  }
}
