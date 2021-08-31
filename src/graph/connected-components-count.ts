// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
// Input: n = 5, edges = [[0, 1], [1, 2], [3, 4]]
// Output: 2

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countComponents = function (n, edges) {
  const map = new Map();
  for (const [from, to] of edges) {
    console.log(from, to);
  }
};

const edges = [[0, 1], [1, 2], [3, 4]];
const n = 5;

console.log(countComponents(n, edges));
