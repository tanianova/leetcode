// https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
    let result = init
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }
    return result
};

nums = [1, 2, 3, 4]
fn = function sum(accum, curr) {
    return accum + curr;
}
init = 0
console.log(reduce(nums, fn, init))