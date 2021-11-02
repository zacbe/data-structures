# Code Question 1

Amazon sellers sometimes provide a link to documentation about a product they are offering. Documentation is usually large, so it is broken into an even number of volumes for download.

Each volume:

- is stored in a node instance as a SinglyLinkedListNode
- has a page count stored in data
- has a pointer to the next volume stored in next

A customer will read the first and last volumes each day, removing the volumes from the list after reading them. Given a reference to the head of a singly-linked list, calculate the maximum number of pages read on any day.

> Note: Try to create a solution that has a space complexity of O (1).

## Example

The linked list is as follows:

```
[1] => [4] => [3] => [2]
```

On the first day, the customer reads the volumes with page counts `1` and `2`, and removes them from the list. The number of pages read on the first day is `1 + 2 = 3`.

The new list is:

```
[4] => [3]
```

On the second day, the customer reads the two remaining volumes with page counts `4` and `3`. The number of pages read on the second day is `4 + 3 = 7`. The list is now empty.

Since `7 > 3`, the **maximum number of page reads** is `7`.

## Function Description

`maximumPages` has the following parameters:

- `head` a reference to the head of a singly-linked list of n integers

## Returns int:

the maximum number of pages read on any day

## Constraints

- `2 <= n <= 10^5`, where n is even
- `1 <= SinglyLinkedListNode[i].data <= 10^9`, where (`0 <= i <= n`)

```javascript
// Example node class
/**
 * @Class Node
 * @param {Integer} data
 * @param {Node|Null} next
 */

/**
 * @function maximumPages
 * @param {Node} head - The head of the linked list
 * @return {Integer} - The max amount of pages read
 */

function maximumPages(head) {}
```
