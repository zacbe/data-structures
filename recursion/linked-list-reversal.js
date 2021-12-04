const { Node, LinkedList } = require("../linked-list/single-link/index");

/**
 *
 * @param {Node} head
 * @returns {Node}
 */
function reverseList(head) {
  if (!head || !head.next) return head;
  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return p;
}

const array = [1, 2, 3, 4, 5, 6];
const list = new LinkedList();
list.createFromArray(array);
// console.log(JSON.stringify(list.head, null, 2));

const res = reverseList(list.head);
console.log(JSON.stringify(res, null, 2));
