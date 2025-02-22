// https://leetcode.com/problems/chunk-array/?envType=study-plan-v2&envId=30-days-of-javascript

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



