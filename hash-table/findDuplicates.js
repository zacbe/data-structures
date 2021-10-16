/**
 * Determines if the given array contains duplicates
 *
 * @param {number[]} numbers
 * @returns
 */
function findDuplicates(numbers) {
  const set = new Set();

  for (const n of numbers) {
    if (set.has(n)) {
      return true;
    } else {
      set.add(n);
    }
  }

  return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];

const duplicate = findDuplicates(numbers);
console.log(duplicate);
