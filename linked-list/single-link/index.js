/**
 *
 * @param {Number} value
 * @param {Node|null} next
 */
function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

function LinkedList(head) {
  this.head = head || null;
  this.size = 0;
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
LinkedList.prototype.get = function (index) {
  if (!this.head) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    if (!curr.next) return -1;

    curr = curr.next;
  }

  return curr.value;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.addAtHead = function (val) {
  this.head = new Node(val, this.head);
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.head = new Node(val);
    this.size++;
    return;
  }

  let curr = this.head;
  while (curr.next) {
    curr = curr.next;
  }

  curr.next = new Node(val);
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  let curr = this.head;
  let prev = curr;
  for (let i = 0; i < index; i++) {
    if (!curr.next) return -1;

    prev = curr;
    curr = curr.next;
  }

  prev.next = new Node(val, curr);
  this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
LinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let curr = this.head;
  let prev = curr;

  for (let i = 0; i < index; i++) {
    if (!curr.next) return -1;

    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
  this.size--;
};

/**
 *
 * @param {Number[]} array
 * @returns {Node} Head of the linked list
 */
LinkedList.prototype.createFromArray = function (array) {
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

LinkedList.prototype.print = function () {
  let p = this.head;
  let list = "";
  while (p) {
    list += p.value + " => ";
    p = p.next;
  }

  console.log(list + "null");
};

/**
 * Your LinkedList object will be instantiated and called as such:
 * var obj = new LinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

module.exports = {
  LinkedList,
  Node,
};
