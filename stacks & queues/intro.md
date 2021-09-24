# Stacks & Queues

They are both linear and flexible in size.

## Stack

- LIFO (last in first out)

## Queue

- FIFO (first in first out)

One common application of Breadth-first Search (BFS) is to find the shortest path from the root node to the target node. In this article, we provide an example to explain how queue is applied in a BFS algorithm step by step.

```javascript
// Queues can be easily implemented with push and pop
const q = [];
q.push(2); // queue is now [2]
q.push(5); // queue is now [2, 5]
const i = q.shift(); // queue is now [5]
alert(i); // displays 2
```
