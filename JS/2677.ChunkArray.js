// https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript
// При наличии массива arr и размера фрагмента  size вернуть  фрагментированный массив.
// Массив  фрагментов  содержит исходные элементы в  arr, но состоит из подмассивов, каждый из которых имеет длину  size.
// Длина последнего подмассива может быть меньше,  size если arr.length не делится нацело на size.
// Вы можете предположить, что массив является выводом  JSON.parse. Другими словами, это допустимый JSON.
// Пожалуйста, решите это, не используя функцию lodash  _.chunk .

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function (arr, size) {
    const chunkedArr = []
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
};



