/**
 *
 * @param {Array} array - Input array
 * @param {Number} target - The element to look for
 * @param {string} pick - Recursive or Iterative
 * @returns
 */
function binarySearch(array, target, pick) {
  const strategy = {
    recursive: recursiveBinarySearch,
    iterative: iterativeBinarySearch,
  };

  const fn = strategy[pick];
  return fn(array, target, 0, array.length - 1);
}

/**
 *
 * @param {Array} array - Sorted elements
 * @param {Number} target - The element to look for
 * @param {Number} left - Index of the farmost left element of the array
 * @param {Number} right - Index of the farmost right element of the array
 */
function recursiveBinarySearch(array, target, left, right) {
  // The target was not found
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  // element was found
  if (array[mid] === target) {
    return true;
  } else if (array[mid] > target) {
    // look on the left side
    return recursiveBinarySearch(array, target, left, mid - 1);
  } else if (array[mid] < target) {
    // look on the right side
    return recursiveBinarySearch(array, target, mid + 1, right);
  }
}

/**
 *
 * @param {*} array
 * @param {*} target
 * @returns
 */
function iterativeBinarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // element was found
    if (array[mid] === target) {
      return true;
    } else if (array[mid] > target) {
      // look on the left side
      right = mid - 1;
    } else {
      // look on the right side
      left = mid + 1;
    }
  }

  return -1;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 10;

const result = binarySearch(array, target, "iterative");
console.log({ result });

// The input array must be sorted to keep O(log n) time
// If the input is sorted in place at best we can have O(n log n) time
