// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums): number[] {
  const leftArr = new Array(nums.length);
  const rightArr = new Array(nums.length);
  leftArr[0] = 1;
  rightArr[nums.length - 1] = 1;
  const result = new Array(nums.length);
  for (let i = 1; i < nums.length; i++) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArr[i] = rightArr[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftArr[i] * rightArr[i];
  }

  return result;
};

const input = [1, 2, 3, 4];
console.log(productExceptSelf(input));

// Input: [1,2,3,4];
// Output: [24,12,8,6]
