const { ListNode, Node } = require("./linked-list-from-array");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (!head || !head.next) return null;

  // add dummy node as extra before head
  let dummy = new ListNode(0, head);
  let first = dummy;
  let second = dummy;

  // mode 'first' ahead n+1 times
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  // advance the two pointers one at the time
  while (first) {
    first = first.next;
    second = second.next;
  }

  // skip one node (should be the one to remove)
  second.next = second.next.next;

  return dummy.next;
}

// const array = [1];
// const array = [1, 2];
const array = [1, 2, 3, 4, 5];
const n = 6; // node to remove from end

const list = new ListNode();
list.createFromArray(array);

const res = removeNthFromEnd(list.head, n);
console.log(JSON.stringify(res, null, 2));
