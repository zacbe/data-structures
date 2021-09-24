/**
 * 
 * Implementation the MyCircularQueue class:
 * - MyCircularQueue(k) Initializes the object with the size of the queue to be k.
 * - int Front() Gets the front item from the queue. If the queue is empty, return -1.
 * - int Rear() Gets the last item from the queue. If the queue is empty, return -1.
 * - boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
 * - boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
 * - boolean isEmpty() Checks whether the circular queue is empty or not.
 * - boolean isFull() Checks whether the circular queue is full or not.

 */

/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.size = k;
  this.queue = new Array(this.size);
  this.head = -1;
  this.tail = -1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // check if the queue is full
  if (this.isFull()) {
    return false;
  }

  if (this.head === -1) {
    this.head = 0;
  }

  this.tail = (this.tail + 1) % this.size;
  this.queue[this.tail] = value;

  console.log(this.queue);
  //   console.log({ tail: this.tail });
  //   console.log((this.tail + 1) % this.size);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // check if the queue is empty
  if (this.isEmpty()) {
    return false;
  }

  this.queue[this.head] = undefined;

  if (this.head === this.tail) {
    this.head = -1;
    this.tail = -1;
  } else {
    this.head = (this.head + 1) % this.size;
  }

  console.log(this.queue);
  //   console.log({ head: this.head });
  //   console.log((this.head + 1) % this.size);
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }

  const head = this.head;
  return this.queue[head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  const tail = this.tail;
  return this.queue[tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.head === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  // if head is in the first position and tail is in the last position
  if (this.head === 0 && this.tail === this.size - 1) {
    return true;
  }

  // if head is equal to tail + 1
  // 1, 2, 3, 4, 5
  //    |  |
  //    t  h
  //

  if (this.head === this.tail + 1) {
    return true;
  }

  return false;
};

/**
 *
 * Your MyCircularQueue object will be instantiated and called as such:
 * let obj = new MyCircularQueue(3);
 * obj.enQueue(1); // return True
 * obj.enQueue(2); // return True
 * obj.enQueue(3); // return True
 * obj.enQueue(4); // return False
 * obj.Rear(); // return 3
 * obj.isFull(); // return True
 * obj.deQueue(); // return True
 * obj.enQueue(4); // return True
 * obj.Rear(); // return 4
 *
 */
