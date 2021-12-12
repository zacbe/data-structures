/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = (graph) => {
  const src = 0;
  const path = [src];
  const allPaths = [];
  backtrack(graph, src, path, allPaths);

  return allPaths;
};

/**
 *
 * @param {number[][]} graph
 * @param {number} src
 * @param {number[]} path
 * @param {number[][]} allPaths
 */
const backtrack = (graph, src, path, allPaths) => {
  if (src === graph.length - 1) {
    allPaths.push(path);
  }

  for (const neighbor of graph[src]) {
    backtrack(graph, neighbor, [...path, neighbor], allPaths);
  }
};

const graph = [[1, 2], [3], [3], []];
const res = allPathsSourceTarget(graph);
console.log(res);
