// [1] => [4] => [3] => [2]

// First day the customer reads two volumes
// [1] => [2] = 3

// Second day the customer reads two volumes
// [4] => [3] = 7

// The maximum number of pages read is 7 (7 > 3)

const {
  ListNode,
  Node,
} = require("../linked-list/single-link/linked-list-from-array");

/**
 *
 * @param {Node} head
 * @returns {number}
 */
function maximumPages(head) {
  if (!head) return -1;

  // find middle point
  let middlePointer = findMiddleNode(head);

  // reverse second half of the linked list
  let reversePointer = reverseList(middlePointer);

  let maxCount = Number.MIN_VALUE; //0;
  while (head && reversePointer) {
    const localSum = reversePointer.val + head.val;
    maxCount = Math.max(maxCount, localSum);

    reversePointer = reversePointer.next;
    head = head.next;
  }

  return maxCount;
}

/**
 * Finds the middle node in a linked list
 *
 * @param {ListNode} head
 * @returns {ListNode} - Pointer to the middle node
 */
function findMiddleNode(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseList(head) {
  let curr = head;
  let next = null;
  let prev = null;

  while (curr) {
    // 1. store a reference to the next node
    next = curr.next;

    // 2. update current node next reference to 'prev' pointer
    curr.next = prev;

    // 3. set 'prev' pointer to the current node
    prev = curr;

    // 4. set 'curr' pointer to the next node
    curr = next;
  }

  return prev;
}

// const array = [1, 4, 3, 2];
const array = [1, 2, 3, 1, 2, 1];
const list = new ListNode();
list.createFromArray(array);

const res = maximumPages(list.head);
// const res = findMiddleNode(list.head);
console.log(res);
