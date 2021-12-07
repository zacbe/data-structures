/**
 *
 * @param {string[][]} edges
 * @param {string} nodeA
 * @param {string} nodeB
 */
function undirectedPath(edges, nodeA, nodeB) {
  const graph = buildGraph(edges);

  return dfs_hasPath(graph, nodeA, nodeB, new Set());
}

/**
 *
 * @param {object} graph
 * @param {string} src
 * @param {string} dst
 * @returns {Boolean}
 */
function dfs_hasPath(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  // add new node to set
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (dfs_hasPath(graph, neighbor, dst, visited) === true) return true;
  }
  return false;
}

/**
 *
 * @param {string[][]} edges
 * @returns {object} - Adjacency list
 */
function buildGraph(edges) {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

/**
 * Graph
 *
 * (i) - (j)
 *  |
 * (k) - (l)
 *  |
 * (m)
 *
 * (o) - (n)
 */

// edge list
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const res = undirectedPath(edges, "o", "m");
console.log(res);
