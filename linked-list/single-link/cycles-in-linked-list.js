/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;

  // 3 => 2 => 0 => -4
  //      |_________|
  // head = 3
  // tail = -4

  // p1 = 3 p2 = 0
  // p1 = 2 p2 = 2 | found cycle
}
