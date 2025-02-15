// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
// удалить дубликаты из отсортированного массива, вернуть длину получившегося массива
const arr1 = [1, 1, 2];

const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

// сложность алгоритма по памяти О(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1);
            i--
        }
    }

    return nums.length
};

console.log(removeDuplicates(arr2));
console.log(arr2)