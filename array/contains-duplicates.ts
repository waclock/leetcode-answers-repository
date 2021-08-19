// https://leetcode.com/problems/contains-duplicate/solution/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = function(nums: number[]): boolean {
    const dict = {}
    for(const num of nums){
      if(dict[num] !== undefined) return true;
      dict[num] = 1;
    }
  return false;
};

const nums = [1,2,3,4,2,3,1];
console.log(containsDuplicate(nums));