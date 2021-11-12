const { ListNode } = require("./linked-list-from-array");

/**
 * Given the head of a linked list and an integer val,
 * remove all the nodes of the linked list that has Node.val == val,
 * and return the new head.
 */

/**
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  // skips the head if head.value === val
  while (head && head.val === val) {
    head = head.next;
  }

  let curr = head;

  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

// const array = [1, 2, 6, 3, 4, 5, 6];
const array = [7, 7, 7, 7, 6];
const list = new ListNode();
list.createFromArray(array);

const res = removeElements([], 6);
console.log(JSON.stringify(res, null, 2));
