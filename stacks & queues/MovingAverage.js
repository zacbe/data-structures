/**
 * Given a stream of integers and a window size, calculate the moving average
 * of all integers in the sliding window.
 *
 * Implement the MovingAverage class:
 *
 * - MovingAverage(int size) Initializes the object with the size of the window
 *   size.
 *
 * - double next(int val) Returns the moving average of the last size
 *   values of the stream.
 */

/**
 * @param {number} size
 */
function MovingAverage(size) {
  this.size = size;
  this.queue = []; //new Array(size);
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length === this.size) {
    this.queue.shift();
    this.queue.push(val);
  } else {
    this.queue.push(val);
  }

  const avg = this.avg(this.queue);

  console.log(this.queue);
  console.log(avg);
  return avg;
};

MovingAverage.prototype.avg = function (arr) {
  let avg = 0;
  arr.forEach((e) => {
    avg += e;
  });

  return avg / arr.length;
};

const movingAverage = new MovingAverage(1);
movingAverage.next(4); // return 1.0 = 1 / 1
movingAverage.next(0); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3
