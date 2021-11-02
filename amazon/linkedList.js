// [1] => [4] => [3] => [2]

// First day the customer reads two volumes
// [1] => [2] = 3

// Second day the customer reads two volumes
// [4] => [3] = 7

// The maximum number of pages read is 7 (7 > 3)

const { ListNode, Node } = require("../linked-list/linked-list-from-array");

/**
 *
 * @param {Node} head
 * @returns {number}
 */
function maximumPages(head) {
  if (!head) return -1;

  let maxCount = 0;
  while (head) {
    // get head value and remove head
    const headVal = head.val;
    head = head.next;

    // get tail value and remove tail
    const tailVal = removeTail(head);

    // update maxCount
    const localSum = headVal + tailVal;
    if (maxCount < localSum) {
      maxCount = localSum;
    }
  }

  return maxCount;
}

/**
 * @function removeTail
 * @param {Node} head
 * @returns {number}
 */
function removeTail(head) {
  // Head is a single node
  if (!head.next) {
    const val = head.val;
    head = null;
    return val;
  }

  let pointer = head;
  while (pointer.next.next) {
    pointer = pointer.next;
  }
  // store tail value and remove
  const tail = pointer.next.val;
  pointer.next = null;

  return tail;
}

// const array = [1, 4, 3, 2];
const array = [1, 2, 3, 1, 2, 1];
const list = new ListNode();
list.createFromArray(array);

const res = maximumPages(list.head);
// const res = removeTail(list.head);
console.log(res);
