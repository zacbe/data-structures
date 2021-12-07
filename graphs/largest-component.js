function largestComponent(graph) {
  const visited = new Set();
  let maxCount = 0;

  for (const node in graph) {
    const size = explore(graph, parseInt(node), visited);
    if (maxCount < size) maxCount = size;
  }

  return maxCount;
}

function explore(graph, current, visited) {
  if (visited.has(current)) return 0;

  visited.add(current);
  let size = 1;

  for (let neighbor of graph[current]) {
    size += explore(graph, neighbor, visited);
  }

  return size;
}

/**
 *    (1)
 *     |
 *    (0)         (2)
 *    / \         / \
 *  (5)-(8)     (3)-(4)
 */

// adjecency list
const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

const res = largestComponent(graph);
console.log(res);
