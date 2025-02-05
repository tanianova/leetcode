// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
// на вход подается массив с числами, это цена акции в каждый конкретный день. задача заработать максимальную прибыль,
// купив акции в один из дней и продав их в последствии в другой день. необходимо написать функцию, которая принимает
// массив с данными и возвращает одно число - максимальная прибыль, которую мы сможем заработать. если мы не сможем
// сделать ни одной прибыльной сделки при текущих входных данных, то необходимо вернуть в результате 0.
// мы не можем делать множественные транзакции, мы можем только один раз купить акции и один раз продать
let prices1 = [7, 1, 5, 3, 6, 4] //5
let prices2 = [7, 6, 4, 3, 1] //0

// сложность по времени линейная O(n), так как один цикл, по памяти константа O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        const current = prices[i]
        if (current < minPrice) {
            minPrice = current
        }
        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice
        }
    }

    return maxProfit
}

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));