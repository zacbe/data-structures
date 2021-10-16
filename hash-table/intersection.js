/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  for (const n of nums1) {
    set.add(n);
  }

  const insersect = new Set();
  for (const n of nums2) {
    if (set.has(n)) {
      insersect.add(n);
    }
  }

  return [...insersect];
};

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

const res = intersection(nums1, nums2);
console.log(res);

// common values shaared by both arrays
