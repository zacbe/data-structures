/**
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must appear as many times
 * as it shows in both arrays and you may return the result in any order.
 *
 * Follow up:
 * - What if the given array is already sorted? How would you
 *   optimize your algorithm?
 * - What if nums1's size is small compared to nums2's size?
 *   Which algorithm is better?
 * - What if elements of nums2 are stored on disk, and the memory is limited
 *   such that you cannot load all elements into the memory at once?
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  // 1. add all elements from nums1 into map with count
  const map = new Map();
  for (const num of nums1) {
    if (map.has(num)) {
      const count = map.get(num);
      map.set(num, count + 1);
    } else {
      map.set(num, 1);
    }
  }

  let intesection = [];
  for (const num of nums2) {
    if (map.has(num)) {
      const count = map.get(num);
      intesection.push(num);
    }
  }

  console.log(map);

  return intesection;

  // 2. check nums2 for repeated values (intersection)
  // 3. element in the result must appear as many times as it shows in both arrays
}

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

const res = intersect(nums1, nums2);
console.log({ res });
