// https://leetcode.com/problems/contains-duplicate/solution/
// Input: nums = [1, 2, 3, 1]
// Output: true
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums: number[]): boolean {
  const dict = {};
  for (const num of nums) {
    if (dict[num] !== undefined) return true;
    dict[num] = 1;
  }

  return false;
};

const nums = [1, 2, 3, 4, 2, 3, 1];
console.log(containsDuplicate(nums));

// Time complexity: O(n)
// Space complexity: O(n)

const containsDuplicate2 = function (nums) {
  const set = new Set(nums);

  return (set.size < nums.length);
};
// Time complexity: O(n)
// Space complexity: O(n)
