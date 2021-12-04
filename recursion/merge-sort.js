/**
 * Sorts a given array by Merge Sort
 *
 * Time O(n log n)
 * Space O(n)
 *
 * @param {Number[]} array
 * @param {Number} start
 * @param {Number} end
 */
function mergeSort(array, start, end) {
  if (start >= end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);
  // left side
  mergeSort(array, start, mid);

  // right side
  mergeSort(array, mid + 1, end);

  // merge both halves
  mergeHalves(array, start, mid, end);
}

/**
 * Merges two sorted sub-arrays
 *
 * @param {Number[]} array
 * @param {Number} start
 * @param {Number} mid
 * @param {Number} end
 */
function mergeHalves(array, start, mid, end) {
  // we can use two pointers, one at each array
  // we traverse both arrays and compare the values at each pointer
  const temp = [];
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      temp.push(array[i++]);
    } else {
      temp.push(array[j++]);
    }
  }

  // Add the reast of the values from the left sub-array
  while (i <= mid) {
    temp.push(array[i++]);
  }

  // Add the reast of the values from the right sub-array
  while (j <= end) {
    temp.push(array[j++]);
  }

  for (let k = start; k <= end; k++) {
    array[k] = temp[k - start];
  }
}

/**
 * Sorts an array of elements in place
 * @param {Number[]} array
 * @returns {Number[]}
 */
function sort(array) {
  return mergeSort(array, 0, array.length - 1);
}

// Break down to smallest element
// compare and merge
const array = [-5, 20, 10, 3, 2, 0];
sort(array);
console.log(array);
