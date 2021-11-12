# Stacks & Queues

They are both linear and flexible in size.

## Stack

In a LIFO data structure, `the newest element added to the queue will be processed first`.

Different from the queue, the stack is a LIFO data structure. Typically, the insert operation is called push in a stack. Similar to the queue, a new element is always `added at the end of the stack`. However, the delete operation, pop, will always `remove the last element` which is opposite from the queue.

### LIFO (last in first out)

![lifo](/img/lifo.png)

```javascript
// Queues can be easily implemented with push and pop
const q = [];
q.push(2); // queue is now [2]
q.push(5); // queue is now [2, 5]
const i = q.pop(); // queue is now [5]
alert(i); // displays 2
```

## Queue

In a FIFO data structure, `the first element added to the queue will be processed first`.

As shown in the picture above, the queue is a typical FIFO data structure. The insert operation is also called enqueue and the new element is always `added at the end of the queue`. The delete operation is called dequeue. You are only allowed to `remove the first element`.

### FIFO (first in first out)

![fifo](/img/fifo.png)

One common application of Breadth-first Search (BFS) is to find the shortest path from the root node to the target node. In this article, we provide an example to explain how queue is applied in a BFS algorithm step by step.

```javascript
// Queues can be easily implemented with push and pop
const q = [];
q.push(2); // queue is now [2]
q.push(5); // queue is now [2, 5]
const i = q.shift(); // queue is now [5]
alert(i); // displays 2
```
