/**
 *
 * @param {object} graph
 * @param {string} source
 */
function iterative_depthFirstPrint(graph, source) {
  const stack = [source];
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node);
    const edges = graph[node];
    for (let i = edges.length - 1; i >= 0; i--) {
      stack.push(edges[i]);
    }
  }
}

function depthFirstPrint(graph, source) {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
}

/**
 *  (a) -> (c)
 *   |      |
 *   v      v
 *  (b)    (e)
 *   |
 *   v
 *  (d) -> (f)
 */

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstPrint(graph, "a"); //abdfce
