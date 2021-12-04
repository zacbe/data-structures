const { Node, LinkedList } = require("./index");

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let p1 = linkedListOne;
  let p2 = linkedListTwo;

  let sumHead = new Node(0);
  let sumPointer = sumHead;

  let carry = 0;

  while (p1 || p2) {
    let val1 = p1 ? p1.value : 0;
    let val2 = p2 ? p2.value : 0;
    let sum = val1 + val2 + carry;

    let remainder = sum % 10;
    let newNode = new Node(remainder);
    sumPointer.next = newNode;
    sumPointer = newNode;

    carry = Math.floor(sum / 10);
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
  }

  return sumHead.next;
}

const array1 = [2, 4, 7, 1];
const array2 = [9, 4, 5];

const list1 = new LinkedList();
const list2 = new LinkedList();
list1.createFromArray(array1);
list2.createFromArray(array2);

const res = sumOfLinkedLists(list1.head, list2.head);
console.log(JSON.stringify(res, null, 2));
