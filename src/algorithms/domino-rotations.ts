// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
const minDominoRotations = function (tops: number[], bottoms: number[]): number {
  const candidates = new Set([1, 2, 3, 4, 5, 6]);
  const topMinRotations = [0, 0, 0, 0, 0, 0];
  const bottomMinRotations = [0, 0, 0, 0, 0, 0];

  // Iterate over all pieces
  for (let i = 0; i < tops.length; i++) {
    // Iterate over candidates.
    candidates.forEach(candidate => {
      // If any of the pieces don't have the candidate, remove it from the set as it's not a possible solution anymore
      if (tops[i] !== candidate && bottoms[i] !== candidate) candidates.delete(candidate);
      else if (tops[i] == candidate && bottoms[i] !== candidate) {
        bottomMinRotations[candidate - 1] += 1;
      } else if (bottoms[i] == candidate && tops[i] !== candidate) {
        topMinRotations[candidate - 1] += 1;
      }
    });
  }

  let min = -1;
  candidates.forEach(candidate => {
    min = Math.min(bottomMinRotations[candidate - 1], topMinRotations[candidate - 1]);
  });

  return min;
};

const tops = [2, 1, 2, 4, 2, 2];
const bottoms = [5, 2, 6, 2, 3, 2];

// console.log(minDominoRotations(tops, bottoms));

const tops2 = [1, 2, 1, 1, 1, 2, 2, 2];
const bottoms2 = [2, 1, 2, 2, 2, 2, 2, 2];

console.log(minDominoRotations(tops2, bottoms2));

