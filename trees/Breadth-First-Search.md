## Level-order traversal

Level-order traversal is to traverse the tree level by level.

**Breadth-First Search** is an algorithm to traverse or search in data structures like a tree or a graph. The algorithm starts with a root node and visit the node itself first. Then traverse its neighbors, traverse its second level neighbors, traverse its third level neighbors, so on and so forth.

When we do breadth-first search in a tree, the order of the nodes we visited is in level order.

> Typically, we use a queue to help us to do BFS.

## Direction Vectors

When we are at position `(row, column)`, top, bottom, left and right positions can be reached by:

[👆, 👇, 👈, 👉]

```
center   - (row, column) o
top      - (row + 1, column) ^
bottom   - (row - 1, column) v
left     - (row, column - 1) <
right    - (row, column + 1) >
```

![direction vectors](/img/direction_vectors.png)
