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
