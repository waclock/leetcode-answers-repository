// https://leetcode.com/problems/subarray-sum-equals-k/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k): number {
  let combinations = 0;
  for (let left = 0; left < nums.length; left++) {
    let right = left;
    let current = 0;
    while (current < k || right < nums.length) {
      current += nums[right];
      right++;
      if (current === k)combinations++;
    }
  }

  return combinations;
};

const nums = [1, 2, 3];
const k = 3;

console.log(subarraySum(nums, k));

Number.MIN_SAFE_INTEGER
;
