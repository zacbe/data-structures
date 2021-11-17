const { TreeBinary } = require("./index");

/**
 * @param {Node} root
 * @return {boolean}
 */
function isSymmetric(root) {
  return isMirror(root, root);
}

function isMirror(root1, root2) {
  // check for same depth nodes
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  // compare root
  return (
    root1.val === root2.val &&
    isMirror(root1.right, root2.left) &&
    isMirror(root1.left, root2.right)
  );
}

const array = [1, 2, 2, 3, 4, 4, 3];
const tree = new TreeBinary();
tree.fromArray(array);
const res = isSymmetric(tree.root);
console.log(res);
