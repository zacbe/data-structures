class Node {
  constructor(val, next, prev) {
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Get the value of the index-th node in the linked list.
   * If the index is invalid, return -1.
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (!this.head) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      if (!curr.next) return -1;

      curr = curr.next;
    }

    return curr.val;
  }

  /**
   * Add a node of value val before the first element of the linked list.
   * After the insertion, the new node will be the first node of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }

  /**
   * Append a node of value val to the last element of the linked list.
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
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
  }

  /**
   * Add a node of value val before the index-th node in the linked list.
   * If index equals to the length of linked list, the node will be appended
   * to the end of linked list. If index is greater than the length,
   * the node will not be inserted.
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
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
  }

  /**
   * Delete the index-th node in the linked list, if the index is valid.
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
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
  }
}

/**
 * Your LinkedList object will be instantiated and called as such:
 * var obj = new LinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const list = new LinkedList();
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
list.get(1);
list.deleteAtIndex(1);
list.get(1);
