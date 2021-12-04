const { Node, LinkedList } = require("./index");

/**
 *
 * @param {Node} head
 * @param {Number} k
 * @returns {Node}
 */
function shiftLinkedList(head, k) {
  // Write your code here.
  let tail = head;
  let size = 1;

  while (tail.next) {
    tail = tail.next;
    size++;
  }

  // connect tail and head
  tail.next = head;
  let offset = Math.abs(k) % size;
  if (offset === 0) {
    tail.next = null;
    return head;
  }

  let diff = k > 0 ? size - offset : offset;

  // move pointers n-time
  for (let i = 0; i < diff; i++) {
    console.log({ i });
    head = head.next;
    tail = tail.next;
  }

  // remove cycle
  tail.next = null;

  return head;
}

//  head                     tail
//   v                        v
//   0 => 1 => 2 => 3 => 4 => 5 => null

//      tail  head
//        v    v
//   0 => 1 => 2 => 3 => 4 => 5 => null

// can I connect?
// connect tail to head
// then move k places
// disconect tail.next

// k = 2
//               tail             head
//                v                 v
// 0 => 1 => 2 => 3 => null         4 => 5
// ^_____________________________________v

// k = -2
//     tail            head
//      v                v
// 0 => 1 => null       2 => 3 => 4 => 5
// ^___________________________________v

const array = [0, 1, 2, 3, 4, 5];
const list = new LinkedList();
list.createFromArray(array);

const k = -2; // k can be negative or positive
const res = shiftLinkedList(list.head, k);
console.log(JSON.stringify(res, null, 2));
