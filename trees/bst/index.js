function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.add = function () {};

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

BST.prototype.fromArray = function (array) {
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

BST.prototype.leftIdx = function (idx) {
  return 2 * idx + 1;
};

BST.prototype.rightIdx = function (idx) {
  return 2 * idx + 2;
};

BST.prototype.childrenIdx = function (idx) {
  return { leftIdx: this.leftIdx(idx), rightIdx: this.rightIdx(idx) };
};

BST.prototype.parentIdx = function (idx) {
  return Math.floor((idx - 1) / 2);
};

BST.prototype.insert = function (value) {
  if (value < this.data) {
    if (this.left === null) {
      this.left = new Node(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new Node(value);
    } else {
      this.right.insert(value);
    }
  }
};

module.exports = {
  BST,
  Node,
};
