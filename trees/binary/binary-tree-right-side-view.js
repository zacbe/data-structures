const { Node, BinaryTree } = require("./index");
/**
 * @param {Node} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];

  const queue = [root];
  const rightSide = [];
  while (queue.length > 0) {
    const len = queue.length;
    for (i = 0; i < len; i++) {
      const node = queue.shift();
      // push the last node of each level
      if (i === len - 1) rightSide.push(node.data);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return rightSide;
}

const array = [1, 2, 3, null, 5, null, 4];
const tree = new BinaryTree();
tree.fromArray(array);

const res = rightSideView(tree.root);
console.log(res);
