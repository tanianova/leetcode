// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Вам дан массив prices, где prices[i] - это стоимость акции в iый день.
// Вы хотите максимизировать вашу прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для ее продажи.
// Верните максимальную прибыль, которую вы можете получить от такой транзакции. Если же вы не можете получить прибыль, то верните 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) return 0
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        if ((prices[i] - minPrice) > maxProfit) {
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};