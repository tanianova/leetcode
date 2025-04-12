// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
// Для данной функции fn вернуть новую функцию, которая идентична исходной функции, за исключением того, что она  fn вызывается не более одного раза.
// При первом вызове возвращаемой функции она должна вернуть тот же результат, что и fn.
// При каждом последующем вызове он должен возвращать undefined.

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
    let haveCalled = false

    return function (...args) {
        if (!haveCalled) {
            haveCalled = true
            return fn(...args)
        } else {
            return undefined
        }
    }

};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn

