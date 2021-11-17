# Singly Linked List

Each node in a `singly-linked` list contains not only the value but also a reference field to link to the next node. By this way, the `singly-linked` list organizes all the nodes in a sequence.

![linked-list](/img/linked-list.png)

Unlike the array, we are not able to access a random element in a `singly-linked` list in constant time. If we want to get the `ith` element, we have to traverse from the head node one by one. It takes us `O(N)` time on average to visit an element by index, where `N` is the length of the linked list.

## Add Operation

Unlike an array, we don’t need to move all elements past the inserted element. Therefore, you can insert a new node into a linked list in `O(1)` time complexity, which is very efficient.

![insert node](/img/insert-linked-list.png)

### Add a Node at the Beginning

As we know, we use the head node head to represent the whole list.

So it is essential to update head when adding a new node at the beginning of the list.

1. Initialize a new node cur;
2. Link the new node to our original head node head.
3. Assign cur to head.

![Add node at the beginning](/img/insert-new-head.png)

## Delete Operation

In our first step, we need to find out `prev` and next. It is easy to find out next using the reference field of `cur`. However, we have to traverse the linked list from the head node to find out `prev` which will take `O(N)` time on average, where N is the length of the linked list. So the time complexity of deleting a node will be `O(N)`.

The space complexity is `O(1)` because we only need constant space to store our pointers.

![delete node](/img/delete-linked-list.png)

# Doubly Linked List

The doubly linked list works in a similar way but has **one more reference field** which is known as the `prev` field. With this extra field, you are able to know the previous node of the current node.

Let's take a look at an example:

![double-linked-list](/img/double-linked-list.png)

We can access data in the same exact way as in a singly linked list:

- We are not able to access a random position in constant time.
- We have to traverse from the head to get the `i-th` node we want.
- The time complexity in the worse case will be `O(N)`, where `N` is the length of the linked list.

For **addition** and **deletion**, it will be a little more complicated since we need to take care of the `prev` field as well.

## Add Operation

If we want to insert a new node cur after an existing node `prev`, we can divide this process into two steps:

1. link `cur` with `prev` and `next`, where `next` is the original `next` node of `prev`;

![insert step one](/img/insert-step-1-double-linked-list.png)

2. re-link the `prev` and `next` with `cur`.

![insert step two](/img/insert-step-2-double-linked-list.png)

> Similar to the singly linked list, both the time and the space complexity of the add operation are O(1).

### Example:

![insert step two](/img/insert-example-double-linked-list.png)

> What if we want to insert a new node at **the beginning** or at **the end**?

## Delete Operation

If we want to delete an existing node `cur` from the doubly linked list, we can simply link its previous node `prev` with its next node `next`.

> Unlike the singly linked list, it is easy to get the previous node in constant time with the `prev` field.

Since we no longer need to traverse the linked list to get the previous node, both the **time** and **space** complexity are `O(1)`.

### Example:

![insert step two](/img/delete-example-double-linked-list.png)

> What if we want to delete the **first node** or the **last node**?
