/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  if (!head) return null;

  // 1. Detect the cycle
  let meetingPoint = getMeetingPoint(head);
  if (!meetingPoint) {
    return null;
  }

  // 2. Set slowPointer to the starting point
  // Increase slowPointer and fastPointer by one position until the meet again
  let p1 = head;
  let p2 = meetingPoint.next;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
}

/**
 * @function getMeetingPoint
 * @param {ListNode} head
 * @return {ListNode}
 */
function getMeetingPoint(head) {
  let slowPointer = head;
  let fastPointer = head.next;

  while (slowPointer !== fastPointer) {
    if (!fastPointer || !fastPointer.next) return null;

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return fastPointer;
}
