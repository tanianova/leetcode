// https://leetcode.com/problems/is-object-empty/description/
const obj = {"x": 5, "y": 42} //false
const arr = [null, false, 0]
const obj1 = {}
const arr1 = []
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = function (obj) {
    return Object.keys(obj).length === 0
};

const isEmpty1 = function (obj) {
    for (const _ in obj) return false;
    return true;
};

console.log(isEmpty1(obj));
console.log(isEmpty1(obj1));
console.log(isEmpty1(arr));
console.log(isEmpty1(arr1));