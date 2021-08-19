// https://leetcode.com/problems/house-robber/
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

const rob = (nums: number[]): number => {
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0],nums[1]);
    for(let i = 2; i < nums.length; i++){
        if(dp[i - 1] <= nums[i] + dp[i - 2]){
            dp[i] = nums[i] + dp[i - 2];
        }else{
            dp[i] = dp[i - 1];
        }
    }
    console.log(dp);
    return dp[nums.length - 1];
}

const nums = [2,7,9,3,1];
console.log(rob(nums));