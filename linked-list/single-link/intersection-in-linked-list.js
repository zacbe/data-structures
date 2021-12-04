const { Node, LinkedList } = require("./index");

/**
 * @param {Node} headA
 * @param {Node} headB
 * @return {Node}
 */
function getIntersectionNodeHashSet(headA, headB) {
  // 1. traverse first list and store visited nodes in Set
  const setA = new Set();
  let listA = headA;

  while (listA) {
    setA.add(listA);
    listA = listA.next;
  }

  console.log(setA);

  // 2. traverse second list and at each node check if it exist on the set
  let listB = headB;
  while (listB) {
    if (setA.has(listB)) return listB;

    listB = listB.next;
  }

  return null;
}

/**
 * @param {Node} headA
 * @param {Node} headB
 * @return {Node}
 */
var getIntersectionNodeTwoPointers = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    p1 = p1 ? p1.next : headA;
    p2 = p2 ? p2.next : headB;
  }

  return p1;
};

const arrA = [4, 1, 8, 4, 5];
const arrB = [5, 6, 1, 8, 4, 5];

const listA = new LinkedList();
listA.createFromArray(arrA);

const listB = new LinkedList();
listB.createFromArray(arrB);

// console.log(JSON.stringify(listA.head, null, 2));
// console.log(JSON.stringify(listB.head, null, 2));

// const res = getIntersectionNode(listA.head, listB.head);
// console.log(res);
