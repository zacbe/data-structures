class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  /**
   *
   * @param {Number[]} array
   * @returns {Node} Root of the heap
   */
  buildHeap(array) {
    const firstParentIdx = this.getParent(array.length - 1);
    for (let currIdx = firstParentIdx; currIdx >= 0; currIdx--) {
      this.siftDown(currIdx, array.length - 1, array);
    }

    return array;
  }

  siftDown(currIdx, endIdx, heap) {
    // pick the one with the greater diff

    const leftIdx = this.getLeft(currIdx);
    const right = this.getRight(currIdx);

    const min = Math.min(heap[left], heap[right]);
  }

  /**
   *
   * @param {Number} currIdx
   * @param {Number[]} heap
   */
  siftUp(currIdx, heap) {
    let parentIdx = this.getParent(currIdx);

    while (currIdx > 0 && heap[currIdx] < heap[parentIdx]) {
      this.swap(currIdx, parentIdx, heap);
      currIdx = parentIdx;
      parentIdx = this.getParent(currIdx);
    }
  }

  peek() {
    return this.heap[0];
  }

  /**
   *
   * @param {Number} value
   */
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  /**
   * Deletes the min element of the heap
   * @returns
   */
  remove() {
    // swap last node with min node
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  /**
   *
   * @param {Number} i
   * @returns {Number}
   */
  getLeft(i, heap) {
    if (i > heap.length) null;
    return idx * 2 + 1;
  }

  /**
   *
   * @param {Number} i
   * @returns {Number}
   */
  getRight(i, heap) {
    if (i > heap.length) null;
    return idx * 2 + 2;
  }

  /**
   *
   * @param {Number} i
   * @returns {Number}
   */
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  /**
   *
   * @param {Number} i
   * @param {Number} j
   * @param {Number[]} heap
   */
  swap(i, j, heap) {
    const temp = heap[i];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}

module.exports = {
  MinHeap,
};

/**
 *              3
 *            /   \
 *           4     8
 *          / \   /
 *        10  11 12
 *
 */

const array = [3, 4, 8, 10, 11, 12, null];
const heap = new MinHeap(array);
// heap.insert(5);
