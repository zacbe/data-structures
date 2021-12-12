/**
 *
 * Tree:
 * - All nodes should be connected
 * - No cycles
 *
 *
 * Advanced:
 *  - Check whether or not there are n - 1 edges. If there's not, then return
 *    false.
 * - Check whether or not the graph is fully connected. Return true if it is,
 *   false if otherwise.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
const validTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  // generate adjecency list
  const graph = buildGraph(edges, n);
  const visited = new Set();

  explore(graph, 0, visited);

  return visited.size == n;
};

const explore = (graph, node, visited) => {
  if (visited.has(node)) return;
  visited.add(node);

  for (const neighbor of graph[node]) {
    explore(graph, neighbor, visited);
  }
};

const buildGraph = (edges, n) => {
  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (const edge of edges) {
    const [a, b] = edge;
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const _edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 4],
];

const n = 4;
const edges = [
  [2, 3],
  [1, 2],
  [1, 3],
];

const res = validTree(n, edges);
console.log(res);
