// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2(price = 1) and sell on day 5(price = 6), profit = 6 - 1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices): number {
  let profit = 0;
  let min = 9999;
  for (const price of prices) {
    if (price < min) {
      min = price;
    } else if (profit <= price - min) {
      profit = price - min;
    }
  }

  return profit;
};

const prices = [3, 3, 5, 0, 0, 3, 1, 4];

console.log(maxProfit(prices));

// Time complexity: O(n). One for loop.
// Space complexity: O(1). Two variables: min and profit.
