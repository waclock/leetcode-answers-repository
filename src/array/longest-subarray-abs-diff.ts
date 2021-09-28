// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums: number[], limit: number): number {
  let left = 0;
  let res = 0;
  let right = 1;
  while (left < nums.length) {
    right -= 1;
    let min = nums[left];
    let max = nums[left];
    let diff = 0;
    while (diff <= limit && right < nums.length) {
      if (nums[right] < min) min = nums[right];
      if (nums[right] > max) max = nums[right];
      diff = Math.abs(max - min);
      if (diff > limit) break;
      right++;
    }
    res = Math.max(res, right - left);
    left++;
  }

  return res;
};

const nums = [8, 2, 4, 7];
const limit = 4;

const nums2 = [4, 2, 2, 2, 4, 4, 2, 2];
const limit2 = 0;

// console.log(longestSubarray(nums, limit));
console.log(longestSubarray(nums2, limit2));

