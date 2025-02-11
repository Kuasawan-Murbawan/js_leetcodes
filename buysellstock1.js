// You are given an array prices where prices[i] is the price of
// a given stock on the i-th day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

var nums = [7, 1, 5, 3, 6, 4];
// var nums = [1, 2, 3, 4, 5, 6, 199];

var maxProfit = function (prices) {
  // pick the first element as the lowest price
  var buyAt = prices[0];

  var profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // if current element is less than buyAt, replace it
    if (prices[i] < buyAt) {
      buyAt = prices[i];
    } else if (prices[i] - buyAt > profit) {
      // if element have greater profit than current, replace it
      profit = prices[i] - buyAt;
    }
  }
  return profit;
};
console.log(maxProfit(nums));
