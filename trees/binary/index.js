function Node(data, left, right) {
  this.data = data;
  this.left = left || null;
  this.right = right || null;
}

function TreeBinary() {
  this.root = null;
}

/**
 * Sequential representation
 *
 * The sequential representation uses an array for the storage of tree elements.
 * The number of nodes a binary tree has defines the size of the array being
 * used. The root node of the binary tree lies at the array's first index.
 *
 * @param {*} array
 * @returns
 */

TreeBinary.prototype.fromArray = function (array) {
  this.root = new Node(array[0]);
  const queue = [this.root];
  let i = 0;

  while (queue.length > 0) {
    const curr = queue.shift();
    let { leftIdx, rightIdx } = this.childrenIdx(i);
    i++;

    if (leftIdx < array.length && rightIdx < array.length) {
      let left = array[leftIdx];
      curr.left = left ? new Node(left) : null;
      if (curr.left) queue.push(curr.left);

      let right = array[rightIdx];
      curr.right = right ? new Node(right) : null;
      if (curr.right) queue.push(curr.right);
    }
  }

  return this.root;
};

TreeBinary.prototype.leftIdx = function (idx) {
  return 2 * idx + 1;
};

TreeBinary.prototype.rightIdx = function (idx) {
  return 2 * idx + 2;
};

TreeBinary.prototype.childrenIdx = function (idx) {
  return { leftIdx: this.leftIdx(idx), rightIdx: this.rightIdx(idx) };
};

TreeBinary.prototype.parentIdx = function (idx) {
  return Math.floor((idx - 1) / 2);
};

module.exports = {
  TreeBinary,
  Node,
};
