/**
 *
 * @param {*} val
 * @param {*} next
 */
function Node(val, next) {
  this.val = val;
  this.next = next || null;
}

function ListNode() {
  this.head = null;
  this.size = 0;
}

/**
 *
 * @param {number} array
 * @returns
 */
ListNode.prototype.createFromArray = function (array) {
  const { 0: head } = array;
  this.head = new Node(head);
  this.size = 1;
  let curr = this.head;

  for (let i = 1; i < array.length; i++) {
    curr.next = new Node(array[i]);
    curr = curr.next;
    this.size++;
  }
};

// const arr = [1, 2, 3, 4, 5, 6];
// const list = new ListNode();
// list.createFromArray(arr);

// console.log(JSON.stringify(list.head, null, 2));
// console.log(list);

module.exports = {
  ListNode,
  Node,
};
