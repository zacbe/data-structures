/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

class Node {
  constructor(val, neighbors) {
    this.val = val || 0;
    this.neighbors = neighbors || [];
  }
}

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  if (!node) return node;
  return clone(node, new Map());
};

/**
 *
 * @param {Node} node
 * @param {Map} visited
 * @returns {Node}
 */
const clone = (node, visited) => {
  if (visited.has(node.val)) return visited.get(node.val);

  const cloneNode = new Node(node.val);
  visited.set(node.val, cloneNode);

  for (const neighbor of node.neighbors) {
    const res = clone(neighbor, visited);
    cloneNode.neighbors.push(res);
  }

  return cloneNode;
};

/**
 * (1) -- (2)
 *  |      |
 * (4) -- (3)
 */

const adjList = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2);
node1.neighbors.push(node4);

node2.neighbors.push(node1);
node2.neighbors.push(node3);

node3.neighbors.push(node2);
node3.neighbors.push(node4);

node4.neighbors.push(node1);
node4.neighbors.push(node3);

const res = cloneGraph(node1);
console.log(res);

// const cloneGraph = (node) => {
//     let res = {};

//     const clone = (node) => {
//       if (!node) return node;
//       if (!res[node.val]) {
//         res[node.val] = new Node(node.val);
//         res[node.val].neighbors = node.neighbors.map((neighbor) =>
//           clone(neighbor)
//         );
//       }
//       return res[node.val];
//     };

//     return clone(node);
//   };
