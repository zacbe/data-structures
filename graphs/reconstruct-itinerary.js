/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = (tickets) => {
  const graph = buildGraph(tickets);
  const src = "JFK";

  const itinerary = travel(graph, src, new Set());
  return itinerary;
};

const travel = (graph, src, visited) => {
  if (visited.has(src)) return src;
  visited.add(src);

  const itinerary = [];
  for (const neighbor of graph[src]) {
    const res = travel(graph, neighbor, visited);
    itinerary.push(res);
  }

  return itinerary;
};

/**
 *
 * @param {string[][]} tickets
 * @returns {object}
 */
const buildGraph = (tickets) => {
  const list = {};
  tickets.sort((a, b) => a[1] - b[1]);

  for (ticket of tickets) {
    const [airA, airB] = ticket;
    if (!(airA in list)) list[airA] = [];
    if (!(airB in list)) list[airB] = [];

    list[airA].push(airB);
  }

  return list;
};

const tickets = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
];
// tickets.sort((a, b) => a[1] - b[1]);
// console.log(tickets);

// const adjList = {
//   MUC: ["LHR"],
//   LHR: ["SFO"],
//   JFK: ["MUC"],
//   SFO: ["SJC"],
//   SJC: [],
// };

// const graph = {
//   JFK: ["SFO", "ATL"],
//   SFO: ["ATL"],
//   ATL: ["JFK", "SFO"],
// };

// Output: ["JFK","MUC","LHR","SFO","SJC"]

// const res = findItinerary(tickets);

console.log(
  [
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ].sort((a, b) => a[0] - b[0])
);
