// https://leetcode.com/problems/first-missing-positive/

const firstMissingPositive = (nums: number[]): number => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      console.log(nums);
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  return i + 1;
};

// Input: nums = [7,8,9,11,12]
// Output: 1

const nums = [3, 4, -1, 1];
// const nums = [7,8,9,11,12];
console.log(firstMissingPositive(nums));
