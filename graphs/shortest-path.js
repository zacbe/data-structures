// path length =  numbe of edges in the path

/**
 *
 * @param {String[][]} edges
 * @param {String} start
 * @param {String} end
 * @returns {Number}
 */
const shortestPath = (edges, start, end) => {
  const graph = buildGraph(edges);
  const visited = new Set([start]); // initialize with start
  const queue = [[start, 0]];
  //             node, dist

  while (queue.length > 0) {
    const [node, dist] = queue.shift();
    if (node === end) return dist;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return -1;
};

/**
 *
 * @param {String[][]} edges
 * @returns {object}
 */
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

/**
 *  (x)-(y)
 *  /     \
 * (w)   (z)
 *   \   /
 *    (v)
 */
const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
const start = "w";
const end = "z";

const res = shortestPath(edges, start, end);
console.log(res);
