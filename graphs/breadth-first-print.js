function breadthFirstPrint(graph, source) {
  const queue = [source];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
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

breadthFirstPrint(graph, "a"); //abdfce
