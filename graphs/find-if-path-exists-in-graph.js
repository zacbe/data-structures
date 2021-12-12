const validPath = (n, edges, start, end) => {
  const graph = buildGraph(edges);
  const visited = new Set();

  return explore(graph, start, end, visited);
};

/**
 *
 * @param {object} graph
 * @param {Number} start
 * @param {Number} end
 * @param {Set} visited
 * @returns {Boolean}
 */
const explore = (graph, start, end, visited) => {
  if (start === end) return true;

  if (visited.has(start)) return false;
  visited.add(start);

  for (const neighbor of graph[start]) {
    if (explore(graph, neighbor, end, visited) === true) return true;
  }

  return false;
};

/**
 * Creates adjacency list from  vertex
 * for [0,1] = { 0: [1], 1: [0] }
 *
 * @param {Number[][]} edges
 * @returns {object}
 */
const buildGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    // deconstruct vertex [u,v]
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

/**
 *      (0)
 *     /   \
 *   (2) - (1)
 */

const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];

const start = 0;
const end = 2;
const res = validPath(3, edges, start, end);
console.log(res);
