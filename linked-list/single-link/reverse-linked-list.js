const { Node, LinkedList } = require("./index");

/**
 * Definition for singly-linked list.
 * function Node(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function reverseList(head) {
  if (!head) return head;

  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  // prev has the reversed

  return prev;
}

const array = [1, 2, 3, 4, 5];
const list = new LinkedList();
list.createFromArray(array);

const res = reverseList(list.head);

console.log(res);
