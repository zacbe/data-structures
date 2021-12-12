/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

class Node {
  constructor(val, left, right, next) {
    this.val = val || null;
    this.left = left || null;
    this.right = right || null;
    this.next = next || null;
  }
}

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  if (!root) return root;
  const queue = [root];

  while (queue.length > 0) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (i < len - 1) {
        const nextNode = queue[0] || null;
        node.next = nextNode;
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return root;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

const res = connect(node1);
console.log(res);
