// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  const orderDict = {};
  for (let i = 0; i < order.length; i++) {
    orderDict[order.charCodeAt(i)] = i;
  }
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i + 1].length <= j) return false;
      if (orderDict[words[i].charCodeAt(j)] < orderDict[words[i + 1].charCodeAt(j)]) break;

      if (orderDict[words[i].charCodeAt(j)] > orderDict[words[i + 1].charCodeAt(j)]) {
        return false;
      }
    }
  }

  return true;
};

const words1 = ['hello', 'leetcode'];
const order1 = 'hlabcdefgijkmnopqrstuvwxyz';

const words2 = ['word', 'world', 'row'];
const order2 = 'worldabcefghijkmnpqstuvxyz';

const words3 = ['apple', 'app'];
const order3 = 'abcdefghijklmnopqrstuvwxyz';

console.log(isAlienSorted(words1, order1));
console.log(isAlienSorted(words2, order2));
console.log(isAlienSorted(words3, order3));

