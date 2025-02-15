// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
    let filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if ((fn(arr[i], i))) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
};

function greaterThan10(n) {
    return n > 10;
}

console.log(filter([0, 10, 20, 30], greaterThan10))