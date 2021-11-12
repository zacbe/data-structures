const { ListNode } = require("./linked-list-from-array");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
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

// const array = [1, 2, 3, 4, 5];
const array = [];
const list = new ListNode();
list.createFromArray(array);

// const res = reverseList(list.head);

console.log(list.head);
