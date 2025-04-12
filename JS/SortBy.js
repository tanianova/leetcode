// https://leetcode.com/problems/sort-by/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Дан массив arr и функция fn, вернуть отсортированный массив sortedArr. Можно предположить, что  fn возвращает только числа, и эти числа определяют порядок сортировки  sortedArr. sortedArr должны быть отсортированы в порядке возрастания по fn выходу.
// Вы можете предположить, что fn числа в данном массиве никогда не будут повторяться.

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};