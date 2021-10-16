/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 *
 */

// Constraints:
// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

var MinStack = function () {
  this.stack = new Array();
  this.min = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  const sm = this.min.length - 1;
  if (val <= this.min[sm]) {
    this.min.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // take care of min value

  const popped = this.stack.pop();
  const sm = this.min.length - 1;
  if (popped === this.min[sm]) {
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const topIdx = this.stack.length - 1;
  return this.stack[topIdx];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const sm = this.min.length - 1;
  return this.min[sm];
};

/**
 * Your MinStack object will be instantiated and called as such:
 *
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
