// https://leetcode.com/problems/single-number/description/
// дан массив с числами, в нем все числа повторяются по 2 раза, кроме одного числа. Его и нужно найти.
// Есть еще одно ограничение: необходимо решить эту задачу за линейное время.
const input = [2, 2, 1, 1, 4] // 4

// сложность алгоритма по времени и по памяти линейная O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let unique = Array.from(new Set(nums))
    let reduceSum = (s, i) => s + i

    let uniqueSum = unique.reduce(reduceSum)
    let numSum = nums.reduce(reduceSum)

    return uniqueSum * 2 - numSum
};

const singleNumber2 = (nums) => {
    let cnt = {}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        if (cnt[current]) {
            cnt[current] += 1
        } else {
            cnt[current] = 1
        }
    }

    for (let key in cnt) {
        if (cnt[key] === 1) return Number(key)
    }
    return -1
};

console.log(singleNumber2(input));