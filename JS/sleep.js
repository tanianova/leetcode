// https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Дано положительное целое число millis, напишите асинхронную функцию, которая спит в течение millis миллисекунд. Она может разрешить любое значение.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

