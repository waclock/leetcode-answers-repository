// https://leetcode.com/problems/climbing-stairs/
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n: number): number => {
  const dp = Array(n);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);

  return dp[n];
};

const n = 3;

console.log(climbStairs(n));
