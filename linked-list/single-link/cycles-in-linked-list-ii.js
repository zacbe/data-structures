const { Node, LinkedList } = require("./index");

/**
 * @param {Node} head
 * @return {Node}
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
 * @param {Node} head
 * @return {Node}
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

const array = [1, 2, 3, 4, 5];
const list = new LinkedList();
list.createFromArray(array);
// add cycle

detectCycle(list.head);
