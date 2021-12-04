const { Node, LinkedList } = require("./index");
/**
 * Given the head of a singly linked list, group all the nodes with
 * odd indices together followed by the nodes with even indices,
 * and return the reordered list.
 * Input:
 * 1 => 2 => 3 => 4 => 5 => null
 *
 * Output:
 * 1 => 3 => 5 => 2 => 4 => null
 *
 * Note: You must solve the problem in O(1) extra space complexity
 * and O(n) time complexity.
 */

/**
 *
 * @param {Node} head
 * @returns {Node}
 */
function oddEvenList(head) {
  if (!head || !head.value) return null;

  // set pointers to first odd and first even
  let odd = head;
  let even = head.next;

  // set head pointer to first even
  let evenHead = even;

  // while even is not at the tail
  while (even && even.next) {
    // find next odd
    odd.next = even.next;
    // move pointer to next odd
    odd = odd.next;

    // find next even
    even.next = odd.next;
    // move pointer to next even
    even = even.next;
  }

  // connect the last odd node with the first even node
  odd.next = evenHead;
  return head;
}

const array = [1, 2, 3, 4, 5, 6, 8, 7];
// const array = [];
const list = new LinkedList();
list.createFromArray(array);

const res = oddEvenList(list.head);
console.log(JSON.stringify(res, null, 2));
