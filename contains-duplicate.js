// https://leetcode.com/problems/contains-duplicate/description/
// Дан целочисленный массив nums, верните true, если любое из значений встречается в массиве как минимум дважды,
// иначе верните false, если все значения в массиве различны.

// сложность алгоритма O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const result = {}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        if (result[current]) {
            return true
        } else {
            result[current] = 1
        }
    }
    return false
};

nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums));
