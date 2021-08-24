// https://leetcode.com/problems/number-of-islands/
// Input: grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"]
// ]
// Output: 1

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let islandCount = 0;
  const visitedGrid = new Array(grid.length).fill(x => x).map(x => new Array(grid[0].length).fill(false));

  const discoverIsland = (i, j) => {
    if (visitedGrid[i][j]) return;
    visitedGrid[i][j] = true;
    // Check left
    if (i > 0 && grid[i - 1][j] === '1') {
      discoverIsland(i - 1, j);
    }
    // Check left
    if (j > 0 && grid[i][j - 1] === '1') {
      discoverIsland(i, j - 1);
    }
    // Check right
    if (j < grid[0].length - 1 && grid[i][j + 1] === '1') {
      discoverIsland(i, j + 1);
    }
    // Check below
    if (i < grid.length - 1 && grid[i + 1][j] === '1') {
      discoverIsland(i + 1, j);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visitedGrid[i][j]) continue;
      else if (grid[i][j] == '1') {
        islandCount++;
        discoverIsland(i, j);
      }
    }
  }

  return islandCount;
};

const numIslandsBfs = function (grid) {
  let islandCount = 0;
  const visitedGrid = new Array(grid.length).fill(x => x).map(x => new Array(grid[0].length).fill(false));

  const discoverIsland = (c, r) => {
    const queue = [[c, r]];
    while (queue.length) {
      const [i, j] = queue.shift();
      if (visitedGrid[i][j]) continue;
      visitedGrid[i][j] = true;
      // Check left
      if (i > 0 && grid[i - 1][j] === '1') {
        queue.push([i - 1, j]);
      }
      // Check left
      if (j > 0 && grid[i][j - 1] === '1') {
        queue.push([i, j - 1]);
      }
      // Check right
      if (j < grid[0].length - 1 && grid[i][j + 1] === '1') {
        queue.push([i, j + 1]);
      }
      // Check below
      if (i < grid.length - 1 && grid[i + 1][j] === '1') {
        queue.push([i + 1, j]);
      }
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visitedGrid[i][j]) continue;
      else if (grid[i][j] == '1') {
        islandCount++;
        discoverIsland(i, j);
      }
    }
  }

  return islandCount;
};

const input = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslandsBfs(input));
