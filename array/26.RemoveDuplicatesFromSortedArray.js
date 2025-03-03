// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array
// Дан массив целочисленных значений nums, отсортированный в неубывающем порядке, удалите дубликаты на месте так,
// чтобы каждый уникальный элемент появлялся только один раз. Порядок элементов должен оставаться тем же.
// Верните количество уникальных элементов в nums.
// Предположим, что k - это количество уникальных элементов в nums. Чтобы решение прошло все тесты, нужно выполнить:
// Изменить массив nums так, чтобы первые k элементов nums содержали уникальные элементы в том же порядке, в каком они были изначально в массиве nums.
// Вернуть значение k.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    let k = 1  // Указатель для записи уникальных элементов
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
};


const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums)) // 5, nums = [0,1,2,3,4,_,_,_,_,_]