/**
 *
 * @param {object} graph
 * @returns {Number}
 */
function connectedComponentsCount(graph) {
  const visited = new Set();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, parseInt(node), visited) === true) {
      count += 1;
    }
  }

  return count;
}

/**
 *
 * @param {object} graph
 * @param {Number} current
 * @param {Set<Number>} visited
 * @returns {Boolean}
 */
function explore(graph, current, visited) {
  if (visited.has(current)) return false;
  visited.add(current);

  for (let neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }

  return true;
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

const res = connectedComponentsCount(graph);
console.log(res);
