const { Node, LinkedList } = require("./index");

/**
 * @param {Node} head
 * @param {number} n
 * @return {Node}
 */
function removeNthFromEnd(head, n) {
  if (!head || !head.next) return null;

  // add dummy node as extra before head
  let dummy = new LinkedList(0, head);
  let first = dummy;
  let second = dummy;

  // mode 'first' ahead n+1 times
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  // advance the two pointers one at the time
  while (first) {
    first = first.next;
    second = second.next;
  }

  // skip one node (should be the one to remove)
  second.next = second.next.next;

  return dummy.next;
}

// const array = [1];
// const array = [1, 2];
const array = [1, 2, 3, 4, 5];
const n = 2; // node to remove from end

const list = new LinkedList();
list.createFromArray(array);

const res = removeNthFromEnd(list.head, n);
console.log(JSON.stringify(res, null, 2));
