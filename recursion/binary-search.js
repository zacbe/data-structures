/**
 *
 * @param {Number[]} array
 * @param {Number} left
 * @param {Number} right
 * @param {Number} val
 * @returns {Number} Index of the target element if found
 */
function binarySearch(array, left, right, target) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (array[mid] === target) return mid;

  if (target > mid) {
    // look right
    return binarySearch(array, mid + 1, right, target);
  } else {
    //   look left
    return binarySearch(array, left, mid - 1, target);
  }
}

const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const left = 0;
const right = sorted.length - 1;
const target = 4;
const res = binarySearch(sorted, left, right, target);
console.log(res);
