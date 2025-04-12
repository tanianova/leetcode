// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
// Даны массив целочисленных значений nums и целое число val, удалите все вхождения val в nums на месте. Порядок элементов можно менять. Верните количество элементов в nums, не равных val.
// Предположим, что k - это количество элементов в nums, не равных val. Чтобы решение прошло все тесты, нужно выполнить следующие действия:
// Изменить массив nums так, чтобы первые k элементов nums содержали элементы, не равные val. То, что будет идти после k элементов, не имеет значения.
// Вернуть k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
        console.log(nums)
    }
    return k

};

let nums = [3, 2, 2, 3], val = 3
console.log(removeElement(nums, val)) // 2, nums = [2,2,_,_]
