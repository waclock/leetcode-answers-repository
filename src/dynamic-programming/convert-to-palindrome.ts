
const palindromize = (str: string): number => {
  // dp matrix
  const dp = Array(str.length).fill(null).map(() => Array(str.length).fill(0));

  for (let i = str.length - 2; i >= 0; i--) {
    for (let j = 1; j < str.length; j++) {
      if (str[i] === str[j]) dp[i][j] = dp[i + 1][j - 1];
      else dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
    }
  }

  return dp[0][str.length - 1];
};

const input = 'race';

console.log(palindromize(input));
