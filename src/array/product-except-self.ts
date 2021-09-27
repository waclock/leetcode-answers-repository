// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums): number[] {
  const leftProduct = new Array(nums.length).fill(1);
  const rightProduct = new Array(nums.length).fill(1);
  const res = new Array(nums.length);

  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    rightProduct[j] = nums[j + 1] * rightProduct[j + 1];
  }

  for (let k = 0; k < nums.length; k++) {
    res[k] = leftProduct[k] * rightProduct[k];
  }

  return res;
};

const input = [1, 2, 3, 4];

console.log(productExceptSelf(input));
