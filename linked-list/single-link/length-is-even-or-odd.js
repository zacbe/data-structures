const { Node, LinkedList } = require("./index");

/**
 * 0 - even
 * 1 - odd
 *
 * @param {Node} head
 * @returns {Number}
 */
function isLengthEvenOrOdd(head) {
  let count = 0;
  while (head.next) {
    head = head.next;
    count++;
  }

  return count % 2 ? 0 : 1;
}

// const array = [12, 52, 10, 47, 95, 0];
const array = [9, 4, 3];
const list = new LinkedList();
list.createFromArray(array);

const res = isLengthEvenOrOdd(list.head);
console.log(res);
