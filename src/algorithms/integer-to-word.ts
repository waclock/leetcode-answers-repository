/* eslint-disable max-statements-per-line */
// https://leetcode.com/problems/integer-to-english-words/
/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = function (num: number) {
  const one = (number: number) => ({
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }[number]);

  const teens = (number: number) => ({
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
  }[number]);

  const tens = (number: number) => ({
    1: 'Ten',
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
  }[number]);

  const two = (number: number) => {
    if (number === 0) {
      return '';
    } else if (number < 10) {
      return one(number)
      ;
    } else if (number < 20) {
      return teens(number);
    }

    const tenner = Math.floor(number / 10);
    const rest = Math.floor(number - tenner * 10);
    if (rest !== 0) { return `${tens(tenner)} ${one(rest)}`; }

    return tens(tenner);
  };

  const three = (number: number) => {
    const hundred = Math.floor(number / 100);
    const rest = Math.floor(number - hundred * 100);
    let res = '';
    if (hundred * rest != 0) res = `${one(hundred)} Hundred ${two(rest)}`;
    else if ((hundred === 0) && (rest !== 0)) res = two(rest);
    else if ((hundred !== 0) && (rest === 0)) res = `${one(hundred)} Hundred`;

    return res;
  };

  if (num == 0) { return 'Zero'; }

  const billion = Math.floor(num / 1000000000);
  const million = Math.floor((num - billion * 1000000000) / 1000000);
  const thousand = Math.floor((num - billion * 1000000000 - million * 1000000) / 1000);
  const rest = Math.floor(num - billion * 1000000000 - million * 1000000 - thousand * 1000);

  let result = '';
  if (billion && billion > 0) { result = `${three(billion)} Billion`; }
  if (million && million > 0) {
    if (!!result) { result += ' '; }
    console.log(million, three(million));
    result += `${three(million)} Million`;
  }
  if (thousand && thousand > 0) {
    if (!!result) { result += ' '; }
    result += `${three(thousand)} Thousand`;
  }
  if (rest != 0) {
    if (!!result) { result += ' '; }
    result += three(rest);
  }

  return result;
};

const num = 1234567;

console.log(numberToWords(num));

