// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.
// На вход подается массив с числами — цена акций в каждый конкретный день. Необходимо найти максимальную прибыль,
// которую можно заработать, продавая и покупая акции. Мы можем покупать и продавать акции столько раз, сколько захотим.
// Но мы не можем докупать их, а только купить-продать, купить-продать. То есть после покупки и перед следующей покупкой
// у нас должна быть обязательная операция продажа.

// по времени линейная сложность O(n), так как только 1 цикл
// по памяти константная O(1)
let prices1 = [7, 1, 5, 3, 6, 4]
let prices2 = [7, 6, 4, 3, 1]
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
    let result = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1]
        }
    }
    return result

};

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));