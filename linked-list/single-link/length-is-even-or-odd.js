const { ListNode } = require("./linked-list-from-array");

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
const list = new ListNode();
list.createFromArray(array);

const res = isLengthEvenOrOdd(list.head);
console.log(res);
