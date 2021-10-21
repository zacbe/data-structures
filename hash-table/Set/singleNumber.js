// Find the non repeating number int the array

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      set.delete(n);
    } else {
      set.add(n);
    }
  }

  for (const i of set) {
    return i;
  }

  return -1;
};

// const nums = [2, 2, 1];
const nums = [4, 1, 2, 1, 2];
const res = singleNumber(nums);

console.log(res);
