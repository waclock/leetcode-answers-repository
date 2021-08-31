// https://leetcode.com/problems/paint-house-ii/
// A builder is looking to build a row of N houses that can be of K different colors.
// He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

// Given an N by K matrix where the nth row and kth column represents the cost to
//  build the nth house with kth color, return the minimum cost which achieves this goal.

const minimizePaintCost = function (costs: number[][]): number {
  if (costs.length == 0) return 0;
  const k = costs[0].length;
  const n = costs.length;

  let previousRow = costs[0];

  for (let house = 1; house < n; house++) {
    const currentRow = new Array(k).fill(0);
    for (let color = 0; color < k; color++) {
      let min = Number.MAX_SAFE_INTEGER;
      for (let previousColor = 0; previousColor < k; previousColor++) {
        if (color == previousColor) continue;
        min = Math.min(min, previousRow[previousColor]);
      }
      currentRow[color] += costs[house][color] += min;
    }
    previousRow = currentRow;
  }

  // Find the minimum in the last row.
  let min = Number.MAX_SAFE_INTEGER;
  for (const c of previousRow) {
    min = Math.min(min, c);
  }

  return min;
};

const costs = [[1, 5, 3], [2, 9, 4]];

console.log(minimizePaintCost(costs));
