// https://leetcode.com/problems/unique-paths/
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const uniquePaths = function (m, n) {
  const d = Array(m).fill(
    Array(n).fill(1)
  );

  for (let col = 1; col < m; ++col) {
    for (let row = 1; row < n; ++row) {
      d[col][row] = d[col - 1][row] + d[col][row - 1];
    }
  }

  return d[m - 1][n - 1];
};
const uniquePathsStack = function (m, n) {
  let paths = 0;
  const stack = [[0, 0]];
  const memo = new Map();

  while (stack.length > 0) {
    const [row, col] = stack.pop();
    // Increase
    if (row == m - 1 && col == n - 1) paths++;
    // Move down
    if (row < m - 1) stack.push([row + 1, col]);
    // Move right
    if (col < n - 1) stack.push([row, col + 1]);
  }

  return paths;
};

const uniquePathsRecursive = function (m, n) {
  let paths = 0;
  const stack = [];

  const dfs = (row, col) => {
    // Move down
    if (row < m - 1) dfs(row + 1, col);
    // Move right
    if (col < n) dfs(row, col + 1);
    // Reached goal
    if (row == m - 1 && col == n - 1) paths++;
  };
  dfs(0, 0);

  return paths;
};

const [m, n] = [23, 12];
console.log(uniquePaths(m, n));
