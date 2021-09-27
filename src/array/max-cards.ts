// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = function (cardPoints, k) {
  const memo = new Array(cardPoints.length);
  let max = 0;
  const dfs = (left, right, current, cardsLeft) => {
    if (max < current) max = current;
    if (cardsLeft == 0) return;
    dfs(left + 1, right, current + cardPoints[left + 1], cardsLeft - 1);
    dfs(left, right - 1, current + cardPoints[right - 1], cardsLeft - 1);
  };
  dfs(-1, cardPoints.length, 0, k);

  return max;
};

const cardPoints = [96, 90, 41, 82, 39, 74, 64, 50, 30];
const k = 8;

// console.log(maxScore(cardPoints, k));

const maxScore2 = function (cardPoints: number[], k: number): number {
  let frontScore = cardPoints.slice(0, k).reduce((acc, element) => acc + element);
  let max = frontScore;
  let rearScore = 0;
  for (let i = k - 1; i >= 0; i--) {
    rearScore += cardPoints[cardPoints.length - (k - i)];
    frontScore -= cardPoints[i];
    max = Math.max(rearScore + frontScore, max);
  }

  return max;
};

console.log(maxScore2(cardPoints, k));

