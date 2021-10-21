/*
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add
 * up to target.
 *
 * You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const diff = target - curr;
    console.log({ diff });

    if (map.has(diff)) {
      // I have found the pair
      return [map.get(diff), i];
    }

    map.set(curr, i);
  }

  return -1;
}

// const nums = [2, 13, 3, 4, 71, 6, 11, 15];
// const nums = [2, 7, 11, 15];
// const target = 9;

// const nums = [3, 2, 4];
// const target = 6;

// const nums = [3, 3];
// const target = 6;

// const nums = [0, 4, 3, 0];
// const target = 0;

const nums = [-1, -2, -3, -4, -5];
const target = -8;

const res = twoSum(nums, target);

console.log({ res });
