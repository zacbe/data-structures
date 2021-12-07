/**
 *
 * @param {object} graph
 * @param {string} src
 * @param {string} dst
 */
function dfs_hasPath(graph, src, dst) {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
}

/**
 *
 * @param {object} graph
 * @param {string} src
 * @param {string} dst
 */
function bfs_hasPath(graph, src, dst) {
  const queue = [src];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === dst) return true;

    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }

  return false;
}

/**
 * (f) -> (g) -> (h)
 *  |    ^
 *  v  /
 * (i) <- (j)
 *  |
 *  v
 * (k)
 */

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const res = bfs_hasPath(graph, "f", "k");
