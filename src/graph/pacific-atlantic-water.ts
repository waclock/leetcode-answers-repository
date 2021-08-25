// https://leetcode.com/problems/pacific-atlantic-water-flow/
// Input: heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
// Output: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

const pacificAtlantic = function (heights) {
  const response = [];
  if (heights.length === 0) return [];
  const numRows = heights.length;
  const numCols = heights[0].length;
  const initializeOcean = () => new Array(numRows).fill(x => x).map(_ => new Array(numCols).fill(0));
  const atlantic = initializeOcean();
  const pacific = initializeOcean();

  const dfs = (row, col, value, ocean) => {
    if (row < 0 || col < 0 || row > numRows - 1 || col > numCols - 1) return;
    if (heights[row][col] < value) return;
    if (ocean[row][col] > 0) return;
    ocean[row][col] = true;
    if (atlantic[row][col] && pacific[row][col]) response.push([row, col]);

    dfs(row + 1, col, heights[row][col], ocean);
    dfs(row - 1, col, heights[row][col], ocean);
    dfs(row, col + 1, heights[row][col], ocean);
    dfs(row, col - 1, heights[row][col], ocean);
  };

  // Check top for pacific and bottom for atlantic
  for (let col = 0; col < numCols; col++) {
    dfs(0, col, Number.MIN_SAFE_INTEGER, pacific);
    dfs(numRows - 1, col, Number.MIN_SAFE_INTEGER, atlantic);
  }

  // Check left for pacific and right for atlantic
  for (let row = 0; row <
    numRows; row++) {
    dfs(row, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(row, numCols - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  return response;
};
const heights = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]];

console.log(pacificAtlantic(heights));
