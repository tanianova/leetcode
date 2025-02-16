// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript

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

