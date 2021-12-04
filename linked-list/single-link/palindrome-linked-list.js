const { Node, LinkedList } = require("./index");

/**
 * we could reverse the second half of the linked list and then
 * traverse it with two pointers. We set one pointer at the head
 * and one at the middle point.
 *
 * 1 => 2 => 2 => 1
 *
 * after reversing
 *
 * 1 => 2 => 1 => 2
 * ^         ^
 * p1        p2
 *
 *
 * Then we can move the pointers one at the time and the value
 * at both pointers should be the same, if is not, then we can say
 * is not a palindrome
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {Node} head
 * @return {boolean}
 */
function isPalindrome(head) {
  if (!head) return null;

  let middlePointer = findMiddle(head);
  let reversePointer = reverseList(middlePointer);

  while (head && reversePointer) {
    if (head.val !== reversePointer.val) return false;

    head = head.next;
    reversePointer = reversePointer.next;
  }

  return true;
}

/**
 * Receives the head of a linked list and reverse it
 * @param {Node} head
 * @returns {Node}
 */
function reverseList(head) {
  let curr = head;
  let prev = null;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}

/**
 * Finds middle node of a linked list
 * @param {Node} head
 * @returns {Node} - Pointer to the middle node
 */
function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// const array = [1, 2];
const array = [1, 2, 5, 3, 5, 2, 1];
const list = new LinkedList();
list.createFromArray(array);

const res = isPalindrome(list.head);
console.log(res);
