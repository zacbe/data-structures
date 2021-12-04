const { Node, LinkedList } = require("./index");

/**
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has Node.val == val,
 * and return the new head.
 */

/**
 *
 * @param {Node} head
 * @param {number} value
 * @return {Node}
 */
function removeElements(head, value) {
  // skips the head if head.value === value
  while (head && head.value === value) {
    head = head.next;
  }

  let curr = head;

  while (curr && curr.next) {
    if (curr.next.value === value) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

const array = [1, 2, 6, 3, 4, 5, 6];
// const array = [7, 7, 7, 7, 6];
const list = new LinkedList();
list.createFromArray(array);

const res = removeElements(list.head, 6);
console.log(JSON.stringify(res, null, 2));
