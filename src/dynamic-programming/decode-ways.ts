// https://leetcode.com/problems/decode-ways/
// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

const numDecodings2 = (s: string): number => {
  // DP array to store the subproblem results
  const dp = new Array(s.length + 1);
  dp[0] = 1;

  // Ways to decode a string of size 1 is 1. Unless the string is '0'.
  // '0' doesn't have a single digit decode.
  dp[1] = s.charAt(0) == '0' ? 0 : 1;

  for (let i = 2; i < dp.length; i++) {
    // Check if successful single digit decode is possible.
    if (s.charAt(i - 1) != '0') {
      dp[i] = dp[i - 1];
    }

    // Check if successful two digit decode is possible.
    const twoDigit = parseInt(s.substring(i - 2, i));
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
};

const numDecodings = function (s: string):number {
  if (s.charAt(0) === '0') return 0;
  let oneBack = 1;
  let twoBack = 1;
  for (let i = 1; i < s.length; i++) {
    let current = 0;
    if (s.charAt(i) != '0') {
      current = oneBack;
    }
    const twoDigit = parseInt(s.substring(i - 1, i + 1), 10);
    if (twoDigit >= 10 && twoDigit <= 26) {
      current += twoBack;
    }
    twoBack = oneBack;
    oneBack = current;
  }

  return oneBack;
};

const str = '12';
console.log(numDecodings2(str));
