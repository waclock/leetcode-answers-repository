// https://leetcode.com/problems/majority-element/solution/

const majorityElement = function (nums: number[]) :number {
  const map = new Map();
  let candidate = nums[0];
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > map.get(candidate)) {
      candidate = num;
    }
  }

  return candidate;
};

// Optimal O(1) space solution Boyer-Moore

const majorityElement2 = function (nums: number[]): number {
  let count = 0;
  let candidate = null;
  for (const num of nums) {
    if (count == 0) {
      candidate = num;
    }
    count += (num == candidate) ? 1 : -1;
  }

  return candidate;
};

const nums = [6, 5, 5];
console.log(majorityElement(nums));
