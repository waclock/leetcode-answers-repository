// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (dict.has(num) && i - dict.get(num) <= k) return true;
    dict.set(num, i);
  }

  return false;
};

const nums = [1, 2, 3, 1];
const k = 3;

console.log(containsNearbyDuplicate(nums, k));
