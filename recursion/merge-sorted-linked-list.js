const { Node, LinkedList } = require("../linked-list/single-link/index");
// Merge two sorted linked lists into one

/**
 *
 * @param {Node} A
 * @param {Node} B
 */
function sortedMerge(A, B) {
  if (!A) return B;
  if (!B) return A;

  if (A.value <= B.value) {
    A.next = sortedMerge(A.next, B);
    return A;
  } else {
    B.next = sortedMerge(A, B.next);
    return B;
  }
}

const arrayA = [1, 3, 5];
const listA = new LinkedList();
listA.createFromArray(arrayA);
listA.print();

const arrayB = [0, 2, 4, 6];
const listB = new LinkedList();
listB.createFromArray(arrayB);
listB.print();

const sorted = new LinkedList(sortedMerge(listA.head, listB.head));
sorted.print();
