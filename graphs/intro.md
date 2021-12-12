# Graphs

## Overview of Disjoint Set

![Binary Search Tree](/img/multiple-graphs.png)

### Terminologies:

- Parent node: the direct parent node of a vertex. For example, in Figure 5, the parent node of vertex 3 is 1, the parent node of vertex 2 is 0, and the parent node of vertex 9 is 9.
- Root node: a node without a parent node; it can be viewed as the parent node of itself. For example, in Figure 5, the root node of vertices 3 and 2 is 0. As for 0, it is its own root node and parent node. Likewise, the root node and parent node of vertex 9 is 9 itself. Sometimes the root node is referred to as the head node.

### The two important functions of a “disjoint set.”

In the introduction videos above, we discussed the two important functions in a “disjoint set”.

- The find function finds the root node of a given vertex. For example, in Figure 5, the output of the find function for vertex 3 is 0.
- The union function unions two vertices and makes their root nodes the same. In Figure 5, if we union vertex 4 and vertex 5, their root node will become the same, which means the union function will modify the root node of vertex 4 or vertex 5 to the same root node.

### There are two ways to implement a “disjoint set”.

- Implementation with Quick Find: in this case, the time complexity of the find function will be `O(1)`. However, the union function will take more time with the time complexity of `O(N)`.
- Implementation with Quick Union: compared with the Quick Find implementation, the time complexity of the union function is better. Meanwhile, the find function will take more time in this case.

graph = edges + nodes

Time complexity

Time O(e) where e is the number of edges (e = n^2)
Space O(n) where n is the number of nodes

## Graph

A graph `G` is an ordered pair of a set `V` of vertices and a set of `E` edges
`G = (V, E)`

> ordered pair: `(a,b) !=== (b,a)` if `a!==b`

## What else can DFS do?

> Time complexity O(V+E)

We can augment the DFS algorithm to:

- Compute a graph's minimum spanning tree.
- Detect and find cycles in a graph.
- Check if a graph is bipartite.
- Find strongly connected components.
- Topologically sort the nodes of a graph.
- Find bridges and articulation points.
- Find augmenting paths in a flow network.
- Generate mazes.

**Object copying**
https://en.wikipedia.org/wiki/Object_copying
