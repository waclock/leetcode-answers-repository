// https://leetcode.com/problems/hand-of-straights/
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  const groups = [...Array(hand.length / groupSize)].map(x => Array(0));
  for (const card of hand) {
    let cardAssignable = false;
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      if (group.length == groupSize) continue;
      else if (group.length === 0 || group[group.length - 1] + 1 === card) {
        group.push(card);
        cardAssignable = true;
        break;
      } else if (group[0] - 1 === card) {
        group.unshift(card);
        cardAssignable = true;
        break;
      }
    }

    console.log(groups);
    if (!cardAssignable) return false;
  }

  return true;
};

const hand = [3, 1, 2];
const groupSize = 3;

console.log(isNStraightHand(hand, groupSize));

